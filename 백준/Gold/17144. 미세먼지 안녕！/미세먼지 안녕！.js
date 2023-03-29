const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [input, ...map] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((data) => data.split(' ').map(Number));

const [r, c, t] = input;

// 공청 위치 찾기
const refresh = { hight: 0, low: 0 };
for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (map[i][j] === -1) {
      refresh.hight = i - 1;
      refresh.low = i;
      break;
    }
  }
}

map[refresh.hight][0] = 0;
map[refresh.low][0] = 0;
// 확산하기
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const spread = () => {
  // 미세먼지 좌표 담을 것임
  const queue = [];

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (map[i][j] > 0) {
        queue.push([i, j]);
      }
    }
  }
  const temp = Array.from(Array(r), () => {
    return Array(c).fill(0);
  });

  for (let i = 0; i < queue.length; i++) {
    const [x, y] = queue[i];

    let spreads = Math.floor(map[x][y] / 5);
    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      //  범위를 넘어간다면
      if (nx < 0 || ny < 0 || nx >= r || ny >= c) {
        continue;
      }
      // 공기청정기가 있거나
      if ((nx === refresh.hight && ny === 0) || (nx === refresh.low && ny === 0)) {
        continue;
      }
      // 본인은 빼주기
      map[x][y] -= spreads;
      temp[nx][ny] += spreads;
    }
  }
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      map[i][j] += temp[i][j];
    }
  }
};

const clear = () => {
  const copy = map.map((data) => [...data]);

  // >
  for (let i = 0; i < c; i++) {
    if (i + 1 >= c) {
      map[refresh.hight - 1][i] = copy[refresh.hight][i];
    } else {
      map[refresh.hight][i + 1] = copy[refresh.hight][i];
    }
  }

  // ^
  for (let i = refresh.hight; i >= 0; i--) {
    if (i - 1 < 0) {
      map[0][c - 2] = copy[0][c - 1];
    } else {
      map[i - 1][c - 1] = copy[i][c - 1];
    }
  }
  // <
  for (let i = c - 1; i >= 0; i--) {
    if (i - 1 < 0) {
      // 공청으로 들어올때
      if (i === refresh.hight) {
        map[0][refresh.hight] = 0;
      } else {
        map[1][0] = copy[0][0];
      }
    } else {
      map[0][i - 1] = copy[0][i];
    }
  }
  // v
  // 내릴때 정화됨
  for (let i = 0; i < refresh.hight; i++) {
    // 공청으로 들어올때
    if (i + 1 === refresh.hight) {
      map[refresh.hight][0] = 0;
    } else {
      map[i + 1][0] = copy[i][0];
    }
  }
  // 아래쪽 순환시키기

  // >
  for (let i = 0; i < c; i++) {
    if (i + 1 >= c) {
      map[refresh.low + 1][i] = copy[refresh.low][i];
    } else {
      map[refresh.low][i + 1] = copy[refresh.low][i];
    }
  }
  // v
  for (let i = refresh.low; i < r; i++) {
    if (i + 1 >= r) {
      map[r - 1][c - 2] = copy[i][c - 1];
    } else {
      map[i + 1][c - 1] = copy[i][c - 1];
    }
  }

  // <
  for (let i = c - 1; i >= 0; i--) {
    if (i - 1 < 0) {
      // 공청으로 들어올때
      if (i === refresh.low) {
        map[r - 1][refresh.low] = 0;
      } else {
        map[r - 2][0] = copy[r - 1][0];
      }
    } else {
      map[r - 1][i - 1] = copy[r - 1][i];
    }
  }

  // ^
  for (let i = r - 1; i > refresh.low; i--) {
    if (i - 1 === refresh.low) {
      map[refresh.low][0] = 0;
    } else {
      map[i - 1][0] = copy[i][0];
    }
  }
};

for (let i = 0; i < t; i++) {
  spread();

  clear();
}

let answer = 0;
for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    answer += map[i][j];
  }
}

console.log(answer);
