const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [[n], ...map] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((data) => data.split(' ').map(Number));

const tree = Array.from(Array(n + 1), () => []);

for (let i = 0; i < n; i++) {
  const node = map[i][0];
  for (let j = 1; j < map[i].length - 1; j += 2) {
    tree[node].push({ node: map[i][j], cost: map[i][j + 1] });
  }
}

const dfs = (start) => {
  const road = Array(n + 1).fill(0);
  const visited = Array(n + 1).fill(false);
  visited[start] = true;

  const queue = [];
  queue.push({ node: start, cost: 0 });
  while (queue.length) {
    const { node, cost } = queue.shift();

    for (let i = 0; i < tree[node].length; i++) {
      const { node: next_node, cost: next_cost } = tree[node][i];
      // 방문했다면 나가기
      if (visited[next_node]) {
        continue;
      } else {
        visited[next_node] = true;
        road[next_node] = next_cost + cost;
        queue.push({ node: next_node, cost: next_cost + cost });
      }
    }
  }
  return road;
};
// 일단 1에서 가장 먼곳 찾기
const standard_Arr = dfs(1);
const max = Math.max(...standard_Arr);
const start = standard_Arr.indexOf(max);

// 찾은 곳에서 가장 먼곳 찾기
console.log(Math.max(...dfs(start)));
