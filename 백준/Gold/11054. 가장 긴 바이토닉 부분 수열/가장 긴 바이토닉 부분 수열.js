const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [[n], arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((data) => data.split(' ').map(Number));

const prev_dp = Array(n).fill(0);
const next_dp = Array(n).fill(1);

for (let i = 0; i < n; i++) {
  const standard = arr[i];

  for (let j = 0; j < i; j++) {
    const cur = arr[j];
    if (standard > cur) {
      // 자신보다 낮은게 몇개 담겼는지
      prev_dp[i] = Math.max(prev_dp[i], prev_dp[j] + 1);
    }
  }
}

for (let i = n - 1; i >= 0; i--) {
  const standard = arr[i];

  for (let j = n - 1; j >= i; j--) {
    const cur = arr[j];
    if (standard > cur) {
      // 자신보다 낮은게 몇개 담겼는지
      next_dp[i] = Math.max(next_dp[i], next_dp[j] + 1);
    }
  }
}

let answer = 0;

for (let i = 0; i < n; i++) {
  let total = prev_dp[i] + next_dp[i];
  if (total > answer) {
    answer = total;
  }
}

console.log(answer);
