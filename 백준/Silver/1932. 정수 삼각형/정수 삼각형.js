const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...Triangle] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = +n;
Triangle = Triangle.map((data) => data.split(" ").map(Number));
const dp = Triangle.map((data) => data.map(() => 0));
dp[0][0] = Triangle[0][0];

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < i + 1; j++) {
    for (let k = 0; k <= 1; k++) {
      dp[i + 1][j + k] = Math.max(
        dp[i + 1][j + k],
        dp[i][j] + Triangle[i + 1][j + k]
      );
    }
  }
}

console.log(Math.max(...dp.pop()));
