const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [[N, K], ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((data) => data.split(" ").map(Number));

const dp = Array.from(Array(N + 1), () => {
  return Array(K + 1).fill(0);
});

for (let i = 0; i < N; i++) {
  const [weight, price] = arr[i];
  for (let j = 1; j < K + 1; j++) {
    if (j - weight >= 0) {
      // i번째 물건을 위해서 i-1번에 물건을 뺀 곳의 price가 적혀있음
      // i가 물건의 수를 나타내기 때문에 가능함
      dp[i + 1][j] = Math.max(dp[i][j - weight] + price, dp[i][j]);
    } else {
      dp[i + 1][j] = dp[i][j];
    }
  }
}
console.log(dp[N][K]);
