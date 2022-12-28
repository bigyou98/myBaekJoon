const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, m] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

let sum = 0;
let max = 0;
for (let i = 1; i <= m; i++) {
  sum += i;
  if (sum >= m) {
    max = i;
    break;
  }
}
const answer = [];
for (let i = 1; i <= max; i++) {
  for (let j = 0; j < i; j++) {
    answer.push(i);
  }
}
console.log(
  answer.slice(n - 1, m).reduce((acc, cur) => {
    return acc + cur;
  }, 0)
);
