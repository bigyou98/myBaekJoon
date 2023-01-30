const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

n = +n;

const map = arr.map((data) => data.split("").map(Number));
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const bfs = (x, y) => {
  const queue = [[x, y]];
  map[x][y] = 0;
  let count = 1;
  while (queue.length) {
    const [curX, curY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = curX + dx[i];
      let ny = curY + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= n) {
        continue;
      }
      if (map[nx][ny] === 1) {
        map[nx][ny] = 0;
        count++;
        queue.push([nx, ny]);
      }
    }
  }
  answer.push(count);
};

const answer = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (map[i][j] === 1) {
      bfs(i, j);
    }
  }
}
answer.sort((a, b) => a - b);
let result = `${answer.length}\n`;
answer.forEach((data) => {
  result += `${data}\n`;
});
console.log(result);
