const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [q, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  isEmpty() {
    return this.front == null && this.rear === null;
  }

  enQueue(data) {
    const newNode = new Node(data);
    this.length++;
    if (this.isEmpty()) this.front = newNode;
    else this.rear.next = newNode;

    this.rear = newNode;
  }

  deQueue() {
    this.length--;
    if (this.isEmpty()) return;
    const value = this.front.data;
    this.front = this.front.next;
    if (!this.front) this.rear = null;

    return value;
  }
}

const [m, n] = q.split(" ").map(Number);
// m : 가로
// n : 세로
arr = arr.map((data) => data.split(" ").map(Number));
const solution = (m, n, arr) => {
  // 이미 익어있는 상태라면 0 반환
  const checkOne = (arr) => {
    return arr
      .map((a) => {
        return a.filter((item) => ![-1, 1].includes(item));
      })
      .every((data) => data.length < 1);
  };
  if (checkOne(arr)) {
    return 0;
  }
  ///////////////////////////////////////
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  ///////////////////////////////////////
  // 이제 날짜 세기

  const queue = new Queue();

  const change4Block = (x, y, cnt) => {
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
        continue;
      }
      if (arr[nx][ny] === 0) {
        arr[nx][ny] = 1;
        queue.enQueue([nx, ny, cnt + 1]);
      }
    }
    answer = cnt;
  };
  // 1인 요소들 찾아서 queue에 넣기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 1) {
        queue.enQueue([i, j, 0]);
      }
    }
  }
  // queue에서 빼가기
  let answer = 0;

  while (queue.length !== 0) {
    for (let i = 0; i < queue.length; i++) {
      const [x, y, cnt] = queue.deQueue();
      change4Block(x, y, cnt);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 0) {
        return -1;
      }
    }
  }
  return answer;
};
console.log(solution(m, n, arr));
