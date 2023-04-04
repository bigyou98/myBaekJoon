const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [input, ...map] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [n, m, x] = input.split(' ').map(Number);
map = map.map((data) => data.split(' ').map(Number));

const road = Array.from(Array(n + 1), () => {
  return [];
});

for (let i = 0; i < m; i++) {
  const [start, end, cost] = map[i];
  road[start].push([end, cost]);
}

const dfs = (cur) => {
  const visited = Array(n + 1).fill(Infinity);

  const queue = [];
  const linkedLoad = road[cur];
  for (let i = 0; i < linkedLoad.length; i++) {
    const [next, cost] = linkedLoad[i];
    // 다음노드, 값, 누적
    queue.push([next, cost, 0]);
  }

  while (queue.length) {
    const [next, cost, acc] = queue.shift();
    if (visited[next] > acc + cost) {
      visited[next] = acc + cost;
      for (let i = 0; i < road[next].length; i++) {
        const [next_node, next_cost] = road[next][i];
        queue.push([next_node, next_cost, acc + cost]);
      }
    }
  }
  return visited;
};

let answer = Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
  if (i === x) {
    dfs(i).forEach((data, i) => {
      answer[i] += data;
    });
  } else {
    answer[i] += dfs(i)[x];
  }
}
console.log(Math.max(...answer.slice(1)));
