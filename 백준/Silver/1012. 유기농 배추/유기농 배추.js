const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [t, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

t = parseInt(t);

let answer = "";

const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

const DFS = (x, y) => {
  const queue = [[x, y]];
  map[x][y] = 0;
  while (queue.length) {
    const [curX, curY] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = curX + dx[i];
      const ny = curY + dy[i];

      // 범위를 넘어간다면
      if (nx < 0 || ny < 0 || nx >= m || ny >= n) {
        continue;
      }
      // 갈수 있다면
      if (map[nx][ny]) {
        // 갔다고 표시
        map[nx][ny] = 0;
        queue.push([nx, ny]);
      }
    }
  }
};
for (let index = 0; index < t; index++) {
  var [m, n, k] = arr.shift().split(" ").map(Number);
  let count = 0;
  var map = Array.from(Array(m), () => Array(n).fill(0));

  // map 만들기
  for (let j = 0; j < k; j++) {
    const [x, y] = arr.shift().split(" ").map(Number);
    map[x][y] = 1;
  }

  // 한칸씩 돌기
  for (let q = 0; q < m; q++) {
    for (let w = 0; w < n; w++) {
      if (map[q][w]) {
        DFS(q, w);
        count++;
      }
    }
  }
  // 정답 합치기
  answer += `${count}\n`;
}

console.log(answer);
