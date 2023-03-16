const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [n, ...arr] = require('fs').readFileSync(filePath).toString().trim().split('\n');

n = +n;
arr = arr.map((data) => data.split(' ').map(Number));

const tree = Array.from(Array(n + 1), () => []);

for (let i = 0; i < n - 1; i++) {
  const [p, c, w] = arr[i];
  tree[p].push([c, w]);
  tree[c].push([p, w]);
}

// BFS는 가장 먼 노드를 반환하도록
const BFS = (node) => {
  const record = {
    node: 1,
    distance: 0,
  };

  const visited = Array(n + 1).fill(false);
  const queue = [];

  // 초기 행동 : 현재 위치에서 연결된 node들 queue에 삽입
  queue.push([node, 0]);
  visited[node] = true;

  while (queue.length) {
    const [current_node, w] = queue.shift();

    const nodes = tree[current_node];
    // 방문하지 않았다면
    for (let i = 0; i < nodes.length; i++) {
      const [next_node, next_w] = nodes[i];
      if (!visited[next_node]) {
        visited[next_node] = true;
        queue.push([next_node, w + next_w]);
        // record 갱신하기
        if (record.distance < w + next_w) {
          record.node = next_node;
          record.distance = w + next_w;
        }
      }
    }
  }
  return record;
};

console.log(BFS(BFS(1).node).distance);
