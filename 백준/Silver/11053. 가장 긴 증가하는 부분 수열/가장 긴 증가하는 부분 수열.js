const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

n = +n;
arr = arr.split(" ").map(Number);
const dp = Array(n).fill(1);

for (let i = 1; i < n; i++) {
  const current = arr[i];
  let max = 0;
  for (let j = 0; j < i; j++) {
    const prev = arr[j];
    if (prev < current) {
      max = Math.max(dp[j], max);
    }
  }
  dp[i] = max + 1;
}

console.log(Math.max(...dp));
