const { inflate } = require('zlib');

const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [n, ...arr] = require('fs').readFileSync(filePath).toString().trim().split('\n');

n = +n;
arr = arr.map((data) => data.split(' ').map(Number));

const dp1 = Array.from(Array(n), () => Array(3).fill(0));
const dp2 = Array.from(Array(n), () => Array(3).fill(0));
const dp3 = Array.from(Array(n), () => Array(3).fill(0));

dp1[0][0] = arr[0][0];
dp1[0][1] = 1001;
dp1[0][2] = 1001;

dp2[0][0] = 1001;
dp2[0][1] = arr[0][1];
dp2[0][2] = 1001;

dp3[0][0] = 1001;
dp3[0][1] = 1001;
dp3[0][2] = arr[0][2];

for (let i = 1; i < n; i++) {
  dp1[i][0] = Math.min(dp1[i - 1][1], dp1[i - 1][2]) + arr[i][0];
  dp1[i][1] = Math.min(dp1[i - 1][0], dp1[i - 1][2]) + arr[i][1];
  dp1[i][2] = Math.min(dp1[i - 1][0], dp1[i - 1][1]) + arr[i][2];
  dp2[i][0] = Math.min(dp2[i - 1][1], dp2[i - 1][2]) + arr[i][0];
  dp2[i][1] = Math.min(dp2[i - 1][0], dp2[i - 1][2]) + arr[i][1];
  dp2[i][2] = Math.min(dp2[i - 1][0], dp2[i - 1][1]) + arr[i][2];
  dp3[i][0] = Math.min(dp3[i - 1][1], dp3[i - 1][2]) + arr[i][0];
  dp3[i][1] = Math.min(dp3[i - 1][0], dp3[i - 1][2]) + arr[i][1];
  dp3[i][2] = Math.min(dp3[i - 1][0], dp3[i - 1][1]) + arr[i][2];
}

// 첫번째와 마지막이 달라야함
dp1[n - 1][0] = Infinity;
dp2[n - 1][1] = Infinity;
dp3[n - 1][2] = Infinity;

console.log(Math.min(...dp1[n - 1], ...dp2[n - 1], ...dp3[n - 1]));
