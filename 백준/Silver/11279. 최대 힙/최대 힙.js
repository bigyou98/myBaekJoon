const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [input, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

input = parseInt(input);
arr = arr.map((data) => Number(data));

// 가장 큰값이 heap.heap[1] 에 담김
class MaxHeap {
  constructor() {
    this.heap = [null];
    // 0번째 index는 사용하지 않을 것이기 때문
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      [this.heap[currentIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[currentIndex],
      ];

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) return this.heap.pop();
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    // 맨뒤의 값을 root로 만든다.
    // 왜냐 반복문 계속 돌릴거니까

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    // 자신이 자식 노드보다 작은 경우에 실행
    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        [this.heap[rightIndex], this.heap[currentIndex]] = [
          this.heap[currentIndex],
          this.heap[rightIndex],
        ];
        currentIndex = rightIndex;
      } else {
        [this.heap[leftIndex], this.heap[currentIndex]] = [
          this.heap[currentIndex],
          this.heap[leftIndex],
        ];
        currentIndex = leftIndex;
      }
      // 위치가 변경됬으니 자식 노드들을 변경시켜준다.
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }
    return returnValue;
  }
}

const maxHeap = new MaxHeap();

let answer = "";
for (let i = 0; i < input; i++) {
  if (arr[i] === 0) {
    if (maxHeap.heap.length !== 1) {
      answer += `${maxHeap.pop()}\n`;
    } else {
      answer += `0\n`;
    }
  } else {
    maxHeap.push(arr[i]);
  }
}

console.log(answer);
