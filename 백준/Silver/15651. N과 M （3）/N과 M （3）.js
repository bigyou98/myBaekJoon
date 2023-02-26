const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, m] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answer = "";

let temp = [];

function dfs(count) {
  if (count === m) {
    answer += `${temp.join(" ")}\n`;
    return;
  }

  for (let i = 0; i < n; i++) {
    temp.push(i + 1);
    dfs(count + 1);
    temp.pop();
  }
}

dfs(0, 0);
console.log(answer);
