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
  if (arr[i][0] === "push_back") {
    stack.push(arr[i][1]);
  } else if (arr[i][0] === "push_front") {
    stack.unshift(arr[i][1]);
  } else if (arr[i][0] === "pop_front") {
    answer.push(stack.length === 0 ? "-1" : stack.shift());
  } else if (arr[i][0] === "pop_back") {
    answer.push(stack.length === 0 ? "-1" : stack.pop());
  } else if (arr[i][0] === "size") {
    answer.push(stack.length);
  } else if (arr[i][0] === "empty") {
    answer.push(stack.length === 0 ? "1" : "0");
  } else if (arr[i][0] === "front") {
    answer.push(stack.length === 0 ? "-1" : stack[0]);
  } else if (arr[i][0] === "back") {
    answer.push(stack.length === 0 ? "-1" : stack.at(-1));
  }
}
console.log(answer.join("\n"));
