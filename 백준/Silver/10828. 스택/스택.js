const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = parseInt(n);
arr = arr.map((data) => data.split(" "));

const stack = [];
const answer = [];

for (let i = 0; i < n; i++) {
  if (arr[i][0] === "push") {
    stack.push(arr[i][1]);
  } else if (arr[i][0] === "pop") {
    answer.push(stack.length === 0 ? "-1" : stack.pop());
  } else if (arr[i][0] === "size") {
    answer.push(stack.length);
  } else if (arr[i][0] === "empty") {
    answer.push(stack.length === 0 ? "1" : "0");
  } else if (arr[i][0] === "top") {
    answer.push(stack.length === 0 ? "-1" : stack.at(-1));
  }
}
console.log(answer.join("\n"));
