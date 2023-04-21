const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [[n, m], ...roads] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((data) => data.split(' ').map(Number));

// 정렬
roads.sort((a, b) => {
  return a[2] - b[2];
});

// 초기 작업 : 부모를 자기자신으로 가르킴
let parents = Array.from(Array(n + 1), (_, i) => {
  return i;
});

// 파인드
const find = (x, parents) => {
  if (x !== parents[x]) {
    // 재귀로 찾은 후 변경해주기
    parents[x] = find(parents[x], parents);
  }

  return parents[x];
};

// 유니온
// a와 b의 부모가 같은지 판단
const union = (a, b, parents) => {
  a = parents[a];
  b = parents[b];

  if (a < b) {
    parents[b] = a;
  } else {
    parents[a] = b;
  }
};

const queue = [];
roads.forEach(([a, b, cost]) => {
  // 부모가 같지 않다면 합친다.
  if (find(a, parents) !== find(b, parents)) {
    union(a, b, parents);
    queue.push(cost);
  }
});
// 마지막만 빼주면 됨
queue.pop();
console.log(queue.reduce((acc, cur) => acc + cur, 0));
