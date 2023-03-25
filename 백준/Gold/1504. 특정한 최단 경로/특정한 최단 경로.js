const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [[n, e], ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((data) => data.split(' ').map(Number));

// 원하는 값(배열[1], 객체의 프로퍼티)으로 할거면 .distance 대신 원하는 값 넣어주셈

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
      if (this.heap[parentIndex].distance <= this.heap[currentIndex].distance) break;
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

    if (leftIndex < length && this.heap[leftIndex].distance < this.heap[smallestIndex].distance) {
      smallestIndex = leftIndex;
    }
    if (rightIndex < length && this.heap[rightIndex].distance < this.heap[smallestIndex].distance) {
      smallestIndex = rightIndex;
    }
    if (smallestIndex !== index) {
      this.swap(this.heap, index, smallestIndex);
      this.sinkDown(smallestIndex);
    }
  }
}

const [v1, v2] = arr.pop();

const tree = Array.from(Array(n + 1), () => {
  return [];
});

for (let i = 0; i < e; i++) {
  const [n1, n2, distance] = arr[i];
  tree[n1].push({ node: n2, distance: distance });
  tree[n2].push({ node: n1, distance: distance });
}

// 시작점에서 끝점까지 가는 최소 배열 반환
const route = (start, end) => {
  const visited = Array(n + 1).fill(Infinity);
  visited[start] = 0;

  // 시작점에서 연결된 것들 다 연결
  const queue = new MinHeap();
  for (let i = 0; i < tree[start].length; i++) {
    queue.insert(tree[start][i]);
    visited[tree[start][i].node] = tree[start][i].distance;
  }

  while (!queue.empty()) {
    const { node, distance } = queue.extractMin();

    for (let i = 0; i < tree[node].length; i++) {
      const { node: next_node, distance: next_distance } = tree[node][i];
      if (visited[next_node] > distance + next_distance) {
        visited[next_node] = distance + next_distance;
        queue.insert({ node: next_node, distance: distance + next_distance });
      }
    }
  }
  return visited[end];
};

let answer = Math.min(route(1, v1) + route(v2, n) + route(v1, v2), route(1, v2) + route(v1, n) + route(v2, v1));
console.log(answer === Infinity ? -1 : answer);
