const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const standard = input.shift().split(" ").map(Number);
const loop = input.map((data) => data.split(" ").map(Number));

const dp = [0, standard[0]];
for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 1] + standard[i - 1];
}
let answer = "";
for (let i = 0; i < m; i++) {
  const [x, y] = loop[i];
  answer += `${dp[y] - dp[x - 1]}\n`;
}
console.log(answer);
