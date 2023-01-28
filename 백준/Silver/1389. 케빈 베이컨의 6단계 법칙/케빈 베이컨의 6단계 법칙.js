const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [input, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = input.split(" ").map(Number);

const mArr = arr.map((data) => data.split(" ").map(Number));

const map = new Map();
for (let i = 0; i < m; i++) {
  const [p1, p2] = mArr[i];
  if (!map.has(p1)) {
    map.set(p1, [p2]);
  } else {
    map.set(p1, [...map.get(p1), p2]);
  }
  if (!map.has(p2)) {
    map.set(p2, [p1]);
  } else {
    map.set(p2, [...map.get(p2), p1]);
  }
}

const bfs = (start) => {
  const visited = Array(n).fill(false);
  const queue = [[start, 0]];
  let result = 0;
  while (queue.length) {
    let [node, count] = queue.shift();
    if (!visited[node - 1]) {
      visited[node - 1] = true;
      result += ++count;
      map.get(node).forEach((v) => {
        queue.push([v, count]);
      });
    }
  }
  answer.push(result);
};

let answer = [];

for (let i = 1; i <= n; i++) {
  bfs(i);
}
console.log(answer.indexOf(Math.min(...answer)) + 1);
