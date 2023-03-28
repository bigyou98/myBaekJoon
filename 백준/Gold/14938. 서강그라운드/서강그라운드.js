const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [input, items, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((data) => data.split(' ').map(Number));

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

const [n, M, r] = input;

const cities = Array(n + 1).fill(0);

// 자신의 지역 아이템은 먹었다고 가정하기
for (let i = 0; i < n; i++) {
  cities[i + 1] = items[i];
}

const map = Array.from(Array(n + 1), () => {
  return [];
});

for (let i = 0; i < r; i++) {
  const [n1, n2, distance] = arr[i];
  map[n1].push([n2, distance]);
  map[n2].push([n1, distance]);
}

const dfs = (node) => {
  const queue = new MinHeap();
  const visited = Array(n + 1).fill(false);
  visited[node] = true;

  // 현재 노드, 거리
  queue.insert([node, 0]);

  while (!queue.empty()) {
    const [currentNode, currentDistance] = queue.extractMin();
    const linkedMap = map[currentNode];
    for (let i = 0; i < linkedMap.length; i++) {
      const [nextNode, nextDistance] = linkedMap[i];
      const nextTotal = nextDistance + currentDistance;

      if (nextTotal <= M) {
        // 방문하지 않았을 때만 더하기
        if (!visited[nextNode]) {
          visited[nextNode] = true;
          // 거리를 더하는게 아니라 여기에 든 걸
          cities[node] += items[nextNode - 1];
        }
        queue.insert([nextNode, nextTotal]);
      }
    }
  }
};

for (let i = 1; i <= n; i++) {
  dfs(i);
}

console.log(Math.max(...cities));
