const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let n = require("fs").readFileSync(filePath).toString().trim();
// .split("\n");
n = +n;

let result = "";
const temp = [];
const visited = Array(n).fill(false);
const dfs = () => {
  if (temp.length === n) {
    result += `${temp.join(" ")}\n`;
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i - 1]) {
      visited[i - 1] = true;
      temp.push(i);
      dfs();
      temp.pop();
      visited[i - 1] = false;
    }
  }
};

dfs();

console.log(result);
