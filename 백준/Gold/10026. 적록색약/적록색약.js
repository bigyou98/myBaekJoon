const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = +n;
arr = arr.map((data) => data.trim().split(""));

// 적록색약이 아닌 사람
let result1 = 0;
const visited1 = Array.from(Array(n), () => {
  return Array(n).fill(false);
});

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const bfs1 = (x, y) => {
  const standard = arr[x][y];
  visited1[x][y] = true;
  const queue = [[x, y]];

  while (queue.length) {
    const [cx, cy] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];
      if (nx >= n || nx < 0 || ny >= n || ny < 0) {
        continue;
      }
      if (arr[nx][ny] === standard && !visited1[nx][ny]) {
        queue.push([nx, ny]);
        visited1[nx][ny] = true;
      }
    }
  }
  result1++;
};

let result2 = 0;
const visited2 = Array.from(Array(n), () => {
  return Array(n).fill(false);
});

const bfs2 = (x, y) => {
  const standard = arr[x][y];
  const set = [];
  if (standard === "R" || standard === "G") {
    set.push("R");
    set.push("G");
  }
  visited1[x][y] = true;
  const queue = [[x, y]];

  // R = G
  while (queue.length) {
    const [cx, cy] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];
      if (nx >= n || nx < 0 || ny >= n || ny < 0) {
        continue;
      }

      let current = arr[nx][ny];
      if (set.includes(current) && !visited2[nx][ny]) {
        queue.push([nx, ny]);
        visited2[nx][ny] = true;
      } else if (current === standard && !visited2[nx][ny]) {
        queue.push([nx, ny]);
        visited2[nx][ny] = true;
      }
    }
  }
  result2++;
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // 방문하지 않았다면
    if (!visited1[i][j]) {
      bfs1(i, j);
    }
    if (!visited2[i][j]) {
      bfs2(i, j);
    }
  }
}

console.log(`${result1} ${result2}`);
