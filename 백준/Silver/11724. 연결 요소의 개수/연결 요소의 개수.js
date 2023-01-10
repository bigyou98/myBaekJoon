const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [input, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.split(" ").map(Number);

arr = arr.map((data) => data.split(" ").map(Number));

const map = Array.from(Array(n + 1), () => []);
arr.forEach((data) => {
  const [n, m] = data;
  map[n].push(m);
  map[m].push(n);
});

// 방문 배열
const visited = Array(n + 1).fill(false);

const check = (data) => {
  const queue = [];
  queue.push(data);
  while (queue.length !== 0) {
    let temp = queue.shift();
    map[temp].forEach((num) => {
      // 방문하지 않았다면
      if (!visited[num]) {
        visited[num] = true;
        queue.push(num);
      }
    });
  }
};

let count = 0;
for (let i = 1; i <= n; i++) {
  // 연결된 것들 다 순회하게 만들기
  if (!visited[i]) {
    check(i);
    count++;
  }
}

console.log(count);
