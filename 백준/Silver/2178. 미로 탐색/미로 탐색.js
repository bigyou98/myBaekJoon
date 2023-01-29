const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [input, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.split(" ").map(Number);
const map = arr.map((data) => data.split("").map(Number));

const infinityArr = Array.from(Array(n), () => Array(m).fill(Infinity));

const queue = [[0, 0, 1]];
infinityArr[0][0] = 1;
const dx = [0, 1, -1, 0];
const dy = [1, 0, 0, -1];

while (queue.length) {
  const [x, y, count] = queue.shift();
  // 갈 수 있는 곳이라면
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= n || ny >= m || nx < 0 || ny < 0) {
      continue;
    }
    if (map[nx][ny] === 1 && infinityArr[nx][ny] === Infinity) {
      queue.push([nx, ny, count + 1]);
      infinityArr[nx][ny] = Math.min(infinityArr[nx][ny], count + 1);
    }
  }
}

// 답 출력
console.log(infinityArr[n - 1][m - 1]);
