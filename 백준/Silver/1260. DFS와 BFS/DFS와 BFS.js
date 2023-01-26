const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [input, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m, v] = input.split(" ").map(Number);

const map = arr.map((data) => data.split(" ").map(Number));

function solution(n, v, map) {
  const dict = {};

  for (const [v1, v2] of map) {
    if (v2 in dict) {
      dict[v2].push(v1);
    } else {
      dict[v2] = [v1];
    }
    if (v1 in dict) {
      dict[v1].push(v2);
    } else {
      dict[v1] = [v2];
    }
  }

  if (!dict[v]) {
    return `${v}\n${v}`;
  }
  for (const key in dict) {
    if (Object.hasOwnProperty.call(dict, key)) {
      dict[key].sort((a, b) => a - b);
    }
  }

  //  V부터 방문된 점을 순서대로 출력
  const visited_dfs = Array(n).fill(false);
  visited_dfs[v - 1] = true;
  const dfs_arr = [v];

  const dfs = (end) => {
    // 아직 방문안했다면
    if (!visited_dfs[end - 1]) {
      // 방문 처리
      visited_dfs[end - 1] = true;
      dfs_arr.push(end);
      // 모두 갔다면 빠져나가기

      for (let i = 0; i < dict[end].length; i++) {
        // 방문하지 않았다면
        if (!visited_dfs[dict[end][i] - 1]) {
          dfs(dict[end][i]);
        }
      }
    }
  };
  dfs(dict[v][0]);

  const visited_bfs = Array(n).fill(false);
  visited_bfs[v - 1] = true;
  const bfs_arr = [];

  const queue = [v];
  while (queue.length !== 0) {
    const current = queue.shift();
    visited_bfs[current - 1] = true;
    bfs_arr.push(current);

    for (let i = 0; i < dict[current].length; i++) {
      // 방문하지 않았다면
      if (
        !visited_bfs[dict[current][i] - 1] &&
        !queue.includes(dict[current][i])
      ) {
        // 큐에 넣어주기
        queue.push(dict[current][i]);
      }
    }
  }

  return `${dfs_arr.join(" ")}\n${bfs_arr.join(" ")}`;
}

console.log(solution(n, v, map));
