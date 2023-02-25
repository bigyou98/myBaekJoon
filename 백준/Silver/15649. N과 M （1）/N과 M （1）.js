const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = input.split(" ").map(Number);

const visited = Array(n + 1).fill(false);

let answer = "";
const temp = [];
const dfs = (cnt) => {
  if (cnt === m) {
    answer += `${temp.join(" ")}\n`;
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      temp.push(i);
      dfs(cnt + 1);
      visited[i] = false;
      temp.pop();
    }
  }
};
dfs(0);
console.log(answer);
