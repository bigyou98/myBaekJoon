const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [start, target] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
// 원하는 값(배열[1], 객체의 프로퍼티)으로 할거면 [1] 대신 원하는 값 넣어주셈

class MinHeap {
  constructor() {
    this.heap = [];
  }

  empty() {
    if (this.heap.length == 0) {
      return true;
    }
    return false;
  }

  swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
    return;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[parentIndex][1] <= this.heap[currentIndex][1]) break;
      this.swap(this.heap, parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }

  extractMin() {
    if (this.heap.length == 1) {
      return this.heap.pop();
    }
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return min;
  }

  sinkDown(index) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    const length = this.heap.length;
    let smallestIndex = index;

    if (leftIndex < length && this.heap[leftIndex][1] < this.heap[smallestIndex][1]) {
      smallestIndex = leftIndex;
    }
    if (rightIndex < length && this.heap[rightIndex][1] < this.heap[smallestIndex][1]) {
      smallestIndex = rightIndex;
    }
    if (smallestIndex !== index) {
      this.swap(this.heap, index, smallestIndex);
      this.sinkDown(smallestIndex);
    }
  }
}

const solution = (start, target) => {
  if (start === target) {
    return `0\n1`;
  }
  const queue = new MinHeap();
  queue.insert([start, 0]);
  const visited = Array(100001).fill(false);
  const answer = [];
  while (!queue.empty()) {
    const [value, time] = queue.extractMin();

    // time이 answer보다 크다면 넘기기
    let next_time = time + 1;

    for (let i = 0; i < 3; i++) {
      let next_value = value;
      if (i === 0) {
        next_value += 1;
      } else if (i === 1) {
        next_value -= 1;
      } else if (i === 2) {
        next_value *= 2;
      }
      // 방문한적이 있다면 나가기
      if (visited[next_value]) {
        continue;
      }

      // 범위를 나가면 나가기
      if (0 > next_value || next_value > 100000) {
        continue;
      }
      if (next_time > answer[0]?.time) {
        continue;
      }
      queue.insert([next_value, next_time]);
      if (next_value === target) {
        answer.push({ value: next_value, time: next_time });
        visited[next_value] = false;
      }
    }
    // 방문처리하기
    visited[value] = true;
  }

  return `${answer[0].time}\n${answer.length}`;
};

console.log(solution(start, target));
