const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, m] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let result = "";
const temp = [];
function dfs() {
  if (temp.length === m) {
    result += `${temp.join(" ")}\n`;
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (temp.at(-1) > i) {
      continue;
    }
    temp.push(i);
    dfs();
    temp.pop();
  }
}
dfs();
console.log(result);
