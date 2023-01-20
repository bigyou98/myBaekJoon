const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [input, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

input = parseInt(input);
arr = arr.map(Number);

const dp = [];
dp[0] = 0;
dp[1] = 1;
dp[2] = 1;
let answer = "";
for (let i = 3; i <= 100; i++) {
  dp[i] = dp[i - 2] + dp[i - 3];
}
for (let i = 0; i < input; i++) {
  answer += `${dp[arr[i]]}\n`;
}
console.log(answer);
