const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

arr = arr.map(Number);

let count = 1;
let index = 0;
const stack = [];
const answer = [];

for (let i = 0; i < n; i++) {
  const number = arr.shift();
  while (count <= number) {
    stack.push(count++);
    answer.push("+");
  }
  const poped = stack.pop();
  if (poped !== number) {
    answer.push("NO");
  }
  answer.push("-");
}

console.log(answer.includes("NO") ? "NO" : answer.join("\n"));
