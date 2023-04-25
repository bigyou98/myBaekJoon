const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [input, ...arr] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [X, Y] = input.split(' ').map(Number);
arr = arr.map((data) => data.trim().split(''));

const dict = {};

const visited = Array.from(Array(X), () => new Array(Y).fill(false));
// 초기화
for (let i = 0; i < X; i++) {
  for (let j = 0; j < Y; j++) {
    if (arr[i][j] in dict) {
      continue;
    } else {
      dict[arr[i][j]] = false;
    }
  }
}

dict[arr[0][0]] = true;
let answer = 1;

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const dfs = (x, y, value) => {
  answer = Math.max(answer, value);
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    // 범위 안
    if (nx >= 0 && nx < X && ny >= 0 && ny < Y) {
      // 아직 한번도 가지 않았다면 넣어주기
      const current = arr[nx][ny];
      if (!dict[current] && !visited[nx][ny]) {
        dict[current] = true;
        visited[nx][ny] = true;
        dfs(nx, ny, value + 1);
        dict[current] = false;
        visited[nx][ny] = false;
      }
    }
  }
};

dfs(0, 0, 1);

console.log(answer);
