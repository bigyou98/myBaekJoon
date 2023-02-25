const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [target] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

input = target.split("").map(Number);
const n = input.length;
const visited = Array(n).fill(false);

const answer = [];

const temp = [];
// 한번에 처리하기
const dfs = (count) => {
  if (count === n) {
    answer.push(temp.join(""));
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      temp.push(input[i]);
      dfs(count + 1);
      visited[i] = false;
      temp.pop();
    }
  }
};
dfs(0);
console.log(
  answer
    .map(Number)
    .filter((data) => data > parseInt(target))
    .sort((a, b) => a - b)[0] ?? 0
);
