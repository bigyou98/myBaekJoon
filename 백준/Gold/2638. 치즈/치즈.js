const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [input, ...map] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((data) => data.split(' ').map(Number));
const [n, m] = input;

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
let total = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 1) total++;
  }
}

const checkInOut = () => {
  const outPlace = Array.from(Array(n), () => Array(m).fill(0));
  const queue = [[0, 0]];

  // 1이면 외부 공기라는 뜻
  outPlace[0][0] = 1;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 범위를 넘어가는 경우는 나가기
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
        continue;
      }

      // 1. 방문을 안했어야함
      // 2. 실제 map이 0이어야함
      if (!outPlace[nx][ny] && map[nx][ny] === 0) {
        outPlace[nx][ny] = 1;
        queue.push([nx, ny]);
      }
    }
  }
  return outPlace;
};

let answer = 0;
while (total !== 0) {
  const outPlace = checkInOut();
  answer++;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 1) {
        let count = 0;
        for (let k = 0; k < 4; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];

          if (outPlace[nx][ny] === 1) {
            count++;
          }
          if (count >= 2) {
            map[i][j] = 0;
            total--;
            break;
          }
        }
      }
    }
  }
}

console.log(answer);
