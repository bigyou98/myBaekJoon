const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [start, target] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let answer = -1;
function DFS(start, cnt) {
  if (start === target) {
    answer = cnt + 1;
    return;
  }
  if (start * 2 <= target) DFS(start * 2, cnt + 1);
  if (start * 10 + 1 <= target) DFS(start * 10 + 1, cnt + 1);
}
DFS(start, 0);
console.log(answer);
