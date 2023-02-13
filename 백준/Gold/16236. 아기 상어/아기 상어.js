const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = +n;
const map = arr.map((data) => data.split(" ").map(Number));

const baby_shark = {
  X: 0,
  Y: 0,
  EXP: 2,
  LV: 2,
};

let fish = [];
// 갈수 있는 곳 넣기
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

// 갈수있는거 측정할때마다 BFS호출함
const BFS = (x, y) => {
  const visited = Array.from(Array(n), () => {
    return Array(n).fill(false);
  });

  const queue = [[x, y, 0]];
  fish = [];
  visited[x][y] = true;

  while (queue.length !== 0) {
    const [cx, cy, distance] = queue.shift();
    let nextDistance = distance + 1;
    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      // 범위 안일 때
      if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
        // 자신의 레벨 이하, 방문하지 않았다면
        if (map[nx][ny] <= baby_shark.LV && !visited[nx][ny]) {
          visited[nx][ny] = true;
          queue.push([nx, ny, nextDistance]);
          // 먹을 수 있다면
          if (map[nx][ny] !== 0 && map[nx][ny] < baby_shark.LV) {
            fish.push({ X: nx, Y: ny, distance: nextDistance });
          }
        }
      }
    }
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (map[i][j] === 9) {
      map[i][j] = 0;
      baby_shark.X = i;
      baby_shark.Y = j;
      BFS(i, j);
    }
  }
}

let answer = 0;
while (fish.length !== 0) {
  // 정렬하기
  fish.sort((a, b) => {
    let A = a.distance;
    let B = b.distance;
    if (A === B) {
      A = a.X;
      B = b.X;
      if (A === B) {
        A = a.Y;
        B = b.Y;
        return A - B;
      } else {
        return A - B;
      }
    } else {
      return A - B;
    }
  });
  // 이동
  baby_shark.X = fish[0].X;
  baby_shark.Y = fish[0].Y;

  // 먹기
  map[baby_shark.X][baby_shark.Y] = 0;

  // 경험치
  baby_shark.EXP--;
  if (baby_shark.EXP === 0) {
    baby_shark.LV++;
    baby_shark.EXP = baby_shark.LV;
  }

  // 이동거리 누적
  answer += fish[0].distance;

  fish.shift();

  // 이동한 거리에서 다시 먹을 수 있는지 판단하기
  BFS(baby_shark.X, baby_shark.Y);
}
console.log(answer);
