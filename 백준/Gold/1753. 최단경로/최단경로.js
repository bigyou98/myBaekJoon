const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [input, start, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [v, e] = input.split(" ").map(Number);
start = +start;
arr = arr.map((data) => data.split(" ").map(Number));

const dict = {};

for (let i = 0; i < e; i++) {
  const [u, v, w] = arr[i];
  if (u in dict) {
    dict[u].push([v, w]);
  } else {
    dict[u] = [[v, w]];
  }
}

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

    if (
      leftIndex < length &&
      this.heap[leftIndex][1] < this.heap[smallestIndex][1]
    ) {
      smallestIndex = leftIndex;
    }
    if (
      rightIndex < length &&
      this.heap[rightIndex][1] < this.heap[smallestIndex][1]
    ) {
      smallestIndex = rightIndex;
    }
    if (smallestIndex !== index) {
      this.swap(this.heap, index, smallestIndex);
      this.sinkDown(smallestIndex);
    }
  }
}

const queue = new MinHeap();

const tree = Array(v + 1).fill(Infinity);
const visited = Array(v + 1).fill(false);

queue.insert([start, 0]);

while (!queue.empty()) {
  const [node, w] = queue.extractMin();
  if (visited[node]) {
    continue;
  }
  visited[node] = true;
  if (tree[node] === "INF") {
    // 처음이라면
    tree[node] = w;
  } else {
    // 더작은 값으로 tree에 저장한다.
    tree[node] = Math.min(tree[node], w);
  }

  // node 기준으로 w를 더해서 queue에 삽입한다
  if (!!dict[node]) {
    for (let i = 0; i < dict[node].length; i++) {
      const [next_node, next_w] = dict[node][i];
      if (tree[next_node] > tree[node] + next_w) {
        tree[next_node] = next_w + tree[node];
        queue.insert([next_node, next_w + w]);
      }
    }
  }
}

// tree 1부터 끝까지
let answer = "";
for (let i = 1; i < tree.length; i++) {
  if (tree[i] === Infinity) {
    answer += `INF\n`;
  } else {
    answer += `${tree[i]}\n`;
  }
}
console.log(answer);
