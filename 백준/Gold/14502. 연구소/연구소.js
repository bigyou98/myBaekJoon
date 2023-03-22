const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [[n, m], ...map] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((data) => data.split(' ').map(Number));

const queue = [];

const virus = [];
// 2일때만 확인
// 상하좌우 확인하며 0이라면 queue에 넣기
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 2) {
      virus.push([i, j]);
    }
    if (map[i][j] === 0) {
      queue.push([i, j]);
    }
  }
}
const BFS = (q, w, e, r, t, y) => {
  const copy_map = map.map((data) => [...data]);
  copy_map[q][w] = 1;
  copy_map[e][r] = 1;
  copy_map[t][y] = 1;
  let count = 0;

  const virusQueue = virus.map((data) => [...data]);

  while (virusQueue.length) {
    const [x, y] = virusQueue.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
        continue;
      }
      if (copy_map[nx][ny] === 0) {
        virusQueue.push([nx, ny]);
        copy_map[nx][ny] = 2;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (copy_map[i][j] === 0) {
        count++;
      }
    }
  }
  return count;
};
let answer = 0;

for (let i = 0; i < queue.length; i++) {
  const [x1, y1] = queue[i];
  for (let j = i + 1; j < queue.length; j++) {
    const [x2, y2] = queue[j];
    for (let k = j + 1; k < queue.length; k++) {
      const [x3, y3] = queue[k];
      answer = Math.max(BFS(x1, y1, x2, y2, x3, y3), answer);
    }
  }
}

console.log(answer);
