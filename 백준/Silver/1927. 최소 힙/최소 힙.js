const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [input, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

input = parseInt(input);
arr = arr.map((data) => Number(data));

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] > value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    while (
      this.heap[currentIndex] > this.heap[leftIndex] ||
      this.heap[currentIndex] > this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] > this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }
    return returnValue;
  }
}

const minHeap = new MinHeap();

let answer = "";
for (let i = 0; i < input; i++) {
  // 0이면 팝
  if (arr[i] === 0) {
    if (minHeap.heap.length !== 1) {
      answer += `${minHeap.pop()}\n`;
    } else {
      answer += `0\n`;
    }
  } else {
    minHeap.push(arr[i]);
  }
}

console.log(answer);
