const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [input, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = input.split(" ").map(Number);
arr = arr.map((data) => data.split(" ").map(Number));
const map = [];
for (let i = 0; i < n; i++) {
  map.push(arr[i]);
}

const dp = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
map.forEach((row, x) => {
  row.forEach((cell, y) => {
    dp[x + 1][y + 1] = cell;
  });
});

for (let x = 1; x <= n; x++) {
  for (let y = 1; y <= n; y++) {
    dp[x][y] += dp[x - 1][y] + dp[x][y - 1] - dp[x - 1][y - 1];
  }
}

function solution(x1, y1, x2, y2) {
  return dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1];
}

let answer = "";
for (let i = n; i < n + m; i++) {
  const [x1, y1, x2, y2] = arr[i];
  answer += `${solution(x1, y1, x2, y2)}\n`;
}

console.log(answer);
