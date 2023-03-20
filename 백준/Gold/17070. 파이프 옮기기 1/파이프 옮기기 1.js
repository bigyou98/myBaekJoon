const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
const board = require('fs')
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((v) => v.split(' ').map(Number));
const [N] = board.shift();

const dp = Array.from(Array(N), () => Array.from(Array(N), () => Array(3).fill(0)));

dp[0][1] = [1, 0, 0]; // horizontal,diagonal, vertical,

for (let x = 0; x < N; x++) {
  for (let y = 0; y < N; y++) {
    if (x == 0 && y == 0) continue;
    const [h, d, v] = dp[x][y];
    if (h > 0) {
      if (y + 1 < N && board[x][y + 1] != 1) {
        dp[x][y + 1][0] += h;
      }

      if (y + 1 < N && board[x][y + 1] != 1 && x + 1 < N && board[x + 1][y] != 1 && board[x + 1][y + 1] != 1) {
        dp[x + 1][y + 1][1] += h;
      }
    }
    if (d > 0) {
      if (y + 1 < N && board[x][y + 1] != 1) {
        dp[x][y + 1][0] += d;
      }

      if (y + 1 < N && board[x][y + 1] != 1 && x + 1 < N && board[x + 1][y] != 1 && board[x + 1][y + 1] != 1) {
        dp[x + 1][y + 1][1] += d;
      }
      if (x + 1 < N && board[x + 1][y] != 1) {
        dp[x + 1][y][2] += d;
      }
    }
    if (v > 0) {
      if (x + 1 < N && board[x + 1][y] != 1) {
        dp[x + 1][y][2] += v;
      }

      if (y + 1 < N && board[x][y + 1] != 1 && x + 1 < N && board[x + 1][y] != 1 && board[x + 1][y + 1] != 1) {
        dp[x + 1][y + 1][1] += v;
      }
    }
  }
}

console.log(dp[N - 1][N - 1].reduce((r, v) => r + v, 0));
