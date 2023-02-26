const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = input.split(" ").map(Number);

let result = "";

const visited = Array(n).fill(false);

const queue = [];
const dfs = (value) => {
  if (queue.length === m) {
    result += `${queue.join(" ")}\n`;
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i] && value < i + 1) {
      visited[i] = true;
      queue.push(i + 1);
      dfs(i + 1);
      queue.pop();
      visited[i] = false;
    }
  }
};

dfs(0);

console.log(result);
