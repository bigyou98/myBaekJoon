const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [input, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [Y, X, H] = input.split(" ").map(Number);

let totalCount = X * Y * H;
const map = [];
for (let i = 0; i < H; i++) {
  map.push(
    arr.slice(i * X, X + i * X).map((data) => data.split(" ").map(Number))
  );
}
const visited = map.map((data) => data.map((data) => data.map(() => false)));

const dx = [-1, 1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0];
const dz = [0, 0, 0, 0, -1, 1];

const queue = [];

// 선행작업
for (let k = 0; k < H; k++) {
  for (let i = 0; i < X; i++) {
    for (let j = 0; j < Y; j++) {
      // 못가는 곳 체크
      if (map[k][i][j] === -1) {
        visited[k][i][j] = true;
        totalCount--;
      }
      // 갈수 있는 곳 체크
      // queue에 넣기
      if (map[k][i][j] === 1) {
        visited[k][i][j] = true;
        queue.push([k, i, j, 0]);
        totalCount--;
      }
    }
  }
}

let answer = 0;

let idx = 0;
while (queue.length !== idx) {
  const [cz, cx, cy, day] = queue[idx];

  for (let i = 0; i < 6; i++) {
    const nx = cx + dx[i];
    const ny = cy + dy[i];
    const nz = cz + dz[i];

    // 범위 넘어선다면
    if (nx < 0 || nx >= X || ny < 0 || ny >= Y || nz < 0 || nz >= H) {
      continue;
    }

    // 아직 방문하지 않았다면
    if (!visited[nz][nx][ny]) {
      queue.push([nz, nx, ny, day + 1]);
      visited[nz][nx][ny] = true;
      totalCount--;
      map[nz][nx][ny] = day + 1;
      answer = day + 1;
    }
  }
  idx++;
}

console.log(totalCount === 0 ? answer : -1);
