const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = +n;
arr = arr.map((data) => data.split(" ").map(Number));

const dp = Array.from(Array(n), () => {
  return Array(3).fill(Number.MAX_SAFE_INTEGER);
});

for (let i = 0; i < 3; i++) {
  dp[0][i] = arr[0][i];
}

// x축
for (let i = 1; i < n; i++) {
  // y축
  for (let j = 0; j < 3; j++) {
    // [i][j] 기준으로 비교해야함
    for (let k = 0; k < 3; k++) {
      // 1번째 조건
      if (i - 1 === 0 && j === k) {
        continue;
      }
      // 2번째 조건
      if (j === k) {
        continue;
      }

      //  전의 줄과 비교하면서 값을 저장하는 방식
      dp[i][j] = Math.min(dp[i][j], arr[i][j] + dp[i - 1][k]);
    }
  }
}
console.log(Math.min(...dp.pop()));
