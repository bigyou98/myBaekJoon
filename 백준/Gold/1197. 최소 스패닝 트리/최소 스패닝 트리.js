const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [[V, E], ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((data) => data.split(' ').map(Number));

function findParent(parent, x) {
  if (parent[x] !== x) {
    parent[x] = findParent(parent, parent[x]);
  }
  return parent[x];
}

function unionFind(parent, a, b) {
  a = findParent(parent, a);
  b = findParent(parent, b);
  if (a < b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
  return parent;
}
const edges = [];
let parents = new Array(V + 1);
let res = 0;
for (let i = 0; i <= V; i++) {
  parents[i] = i;
}
for (let i = 0; i < E; i++) {
  const [a, b, c] = arr[i];
  edges.push([a, b, c]);
}

edges.sort((a, b) => a[2] - b[2]);

edges.forEach((edge) => {
  const [a, b, c] = edge;
  if (findParent(parents, a) !== findParent(parents, b)) {
    parents = unionFind(parents, a, b);
    res += c;
  }
});
console.log(res);
