const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = +n;
arr = arr.map((data) =>
  data.split(" ").map((data) => {
    return data.trim();
  })
);

const tree = {};
for (let i = 0; i < n; i++) {
  const [node, lt, rt] = arr[i];
  tree[node] = [lt, rt];
}
let answer = "";

function preOrder(node) {
  if (node === ".") {
    return;
  }
  answer += node;
  preOrder(tree[node][0]);
  preOrder(tree[node][1]);
}

function inOrder(node) {
  if (node === ".") {
    return;
  }
  inOrder(tree[node][0]);
  answer += node;
  inOrder(tree[node][1]);
}
function postOrder(node) {
  if (node === ".") {
    return;
  }
  postOrder(tree[node][0]);
  postOrder(tree[node][1]);
  answer += node;
}

preOrder("A");
answer += "\n";
inOrder("A");
answer += "\n";
postOrder("A");
console.log(answer);
