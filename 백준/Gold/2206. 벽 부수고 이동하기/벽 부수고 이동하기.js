const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [input, ...map] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.split(' ').map(Number);
map = map.map((data) => data.split('').map(Number));
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const visited = Array.from(new Array(n), () => new Array(m));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    visited[i][j] = [0, 0];
  }
}
const queue = [[0, 0, 0]];

visited[0][0][0] = 1;
let idx = 0;
let answer = -1;

while (idx !== queue.length) {
  const [x, y, chance] = queue[idx];

  if (x === n - 1 && y === m - 1) {
    answer = visited[x][y][chance];
    break;
  }

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
      continue;
    }
    if (map[nx][ny] === 0 && visited[nx][ny][chance] === 0) {
      visited[nx][ny][chance] = visited[x][y][chance] + 1;
      queue.push([nx, ny, chance]);
    } else if (map[nx][ny] === 1 && chance === 0) {
      visited[nx][ny][chance + 1] = visited[x][y][chance] + 1;
      queue.push([nx, ny, chance + 1]);
    }
  }
  idx++;
}

console.log(answer);
