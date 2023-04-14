const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [[n], [m], ...map] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((data) => data.split(' ').map(Number));
const [A, B] = map.pop();

if (A === B) {
  console.log(0);
  console.log(1);
  console.log(1);
  return;
}
const queue = [];

const visited = Array(n + 1).fill(Infinity);
visited[A] = 0;

const dict = Array.from(Array(n + 1), () => []);

for (let i = 0; i < m; i++) {
  const [start, end, cost] = map[i];
  dict[start].push([end, cost]);
}

for (let i = 0; i < dict[A].length; i++) {
  const [end, cost] = dict[A][i];
  visited[end] = cost;
  queue.push([end, cost, `${A}`]);
}

let total_cost = 0;
let answer = '';

while (queue.length) {
  const [end, cost, road] = queue.shift();

  if (visited[end] < cost) {
    continue;
  }

  if (end === B) {
    total_cost = cost;
    answer = road;
  }

  const nextNodeArr = dict[end];
  for (let i = 0; i < nextNodeArr.length; i++) {
    const [next_node, next_cost] = nextNodeArr[i];

    const total_cost = cost + next_cost;
    if (visited[next_node] > total_cost) {
      visited[next_node] = total_cost;
      queue.push([next_node, total_cost, road + `,${end}`]);
    }
  }
}

answer += `,${B}`;

console.log(total_cost);
const road_map = answer.split(',');
console.log(road_map.length);
console.log(road_map.join(' '));
