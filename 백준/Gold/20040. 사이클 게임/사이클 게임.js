const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [[n, m], ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((data) => data.split(' ').map(Number));

const tree = Array.from(Array(n), (_, i) => i);

let count = 0;
let check = false;

const find = (tree, node) => {
  if (tree[node] !== node) {
    tree[node] = find(tree, tree[node]);
  }
  return tree[node];
};

const union = (a, b, tree) => {
  let tree_a = find(tree, a);
  let tree_b = find(tree, b);
  if (tree_a > tree_b) {
    tree[tree_a] = tree_b;
  } else {
    tree[tree_b] = tree_a;
  }
};
for (let i = 0; i < m; i++) {
  count++;
  const [v1, v2] = arr[i];

  if (find(tree, v1) === find(tree, v2)) {
    check = true;
    break;
  } else {
    // 부모 합치기
    union(v1, v2, tree);
  }
}
console.log(check ? count : 0);
