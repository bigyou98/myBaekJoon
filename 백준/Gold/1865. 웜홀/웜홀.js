const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [[t], ...map] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((data) => data.split(' ').map(Number));

let answers = '';

for (let _ = 0; _ < t; _++) {
  let answer = 'NO';
  const [n, m, w] = map.shift();
  const road = [];

  // 초기 세팅
  // 도로
  for (let i = 0; i < m; i++) {
    const [n1, n2, cost] = map.shift();
    road.push([n1, n2, cost]);
    road.push([n2, n1, cost]);
  }
  // 웜홀
  for (let i = 0; i < w; i++) {
    const [start, end, cost] = map.shift();
    road.push([start, end, cost * -1]);
  }

  const visited = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  visited[1] = 0;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < road.length; j++) {
      const [s, e, t] = road[j];
      if (visited[e] > visited[s] + t) {
        visited[e] = visited[s] + t;
      }
    }
  }

  for (let i = 0; i < road.length; i++) {
    const [s, e, t] = road[i];
    if (visited[e] > visited[s] + t) {
      answer = 'YES';
      break;
    }
  }
  console.log(answer);
}
// console.log(answers);
