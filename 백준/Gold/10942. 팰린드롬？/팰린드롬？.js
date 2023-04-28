const { brotliCompress } = require('zlib');

const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [[n], board, [m], ...questions] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((data) => data.split(' ').map(Number));

let dp = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => 0));
for (let i = 0; i < n; i++) {
  dp[i][i] = true;
  if (i + 1 < n) {
    if (board[i] === board[i + 1]) dp[i][i + 1] = true;
    else dp[i][i + 1] = false;
  }
}

for (let j = 2; j < n; j++) {
  for (let i = 0; i < n - 1; i++) {
    if (board[i] !== board[j]) continue;

    if (dp[i + 1][j - 1]) dp[i][j] = true;
  }
}
const answer = [];
questions.forEach(([s, e]) => {
  if (dp[s - 1][e - 1]) answer.push(1);
  else answer.push(0);
});

console.log(answer.join('\n'));
