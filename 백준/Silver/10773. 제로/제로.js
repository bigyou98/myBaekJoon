const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

arr = arr.map(Number);
const answer = [];
for (let i = 0; i < n; i++) {
  const element = arr[i];
  if (element === 0) {
    answer.pop();
  } else {
    answer.push(element);
  }
}
console.log(
  answer.reduce((acc, cur) => {
    return acc + cur;
  }, 0)
);
