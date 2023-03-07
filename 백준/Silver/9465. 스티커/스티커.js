const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [t, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
t = +t;

let answer = "";
for (let i = 0; i < t; i++) {
  const stickers = [];
  n = +arr.shift();
  stickers.push(arr.shift().split(" ").map(Number));
  stickers.push(arr.shift().split(" ").map(Number));
  answer += `${solution(n, stickers)}\n`;
}
function solution(n, stickers) {
  const dp = stickers.map((data) => data.map(() => 0));
  dp[0][0] = stickers[0][0];
  dp[1][0] = stickers[1][0];

  const dx = [0, 1, 1, -1, -1];
  const dy = [2, 1, 2, 1, 2];
  let max = 0;

  if (n === 1) {
    return Math.max(stickers[0][0], stickers[1][0]);
  }
  for (let y = 0; y < n; y++) {
    for (let x = 0; x <= 1; x++) {
      for (let k = 0; k < 5; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (nx >= 0 && nx <= 1 && ny >= 0 && ny < n) {
          // 현재 값을 기준으로 변경한다
          dp[nx][ny] = Math.max(dp[nx][ny], stickers[nx][ny] + dp[x][y]);
          max = Math.max(dp[nx][ny], max);
        }
      }
    }
  }
  return max;
}

console.log(answer);
