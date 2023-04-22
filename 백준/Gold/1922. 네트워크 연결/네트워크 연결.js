const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [[n], [m], ...roads] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((data) => data.split(' ').map(Number));

// 1. 정렬
roads.sort((a, b) => {
  return a[2] - b[2];
});

// 2. 부모 배열 생성
const parent = Array.from(Array(n + 1), (_, i) => i);

// 3. find, union 함수 생성

const find = (x, parent) => {
  if (x !== parent[x]) {
    parent[x] = find(parent[x], parent);
  }

  return parent[x];
};

const union = (a, b, parent) => {
  a = parent[a];
  b = parent[b];

  if (a > b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
};
// 5. find, union를 사용해 부모가 같지 않다면 합쳐주면서 더해주기

let sum = 0;
for (let i = 0; i < m; i++) {
  const [a, b, cost] = roads[i];

  if (find(a, parent) !== find(b, parent)) {
    sum += cost;
    union(a, b, parent);
  }
}

console.log(sum);
