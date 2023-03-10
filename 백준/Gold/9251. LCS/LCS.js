const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [a, b] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const dp = Array.from(Array(a.length + 1), () => {
  return Array(b.length + 1).fill(0);
});

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < b.length; j++) {
    if (a[i] === b[j]) {
      dp[i + 1][j + 1] = dp[i][j] + 1;
    } else {
      dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
}
console.log(dp[a.length][b.length]);
