const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, arr, find] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

n = +n;
find = +find;

let answer = 0;
arr = arr.split(" ").map(Number);
for (let i = 0; i < n; i++) {
  if (arr[i] === find) {
    answer++;
  }
}
console.log(answer);
