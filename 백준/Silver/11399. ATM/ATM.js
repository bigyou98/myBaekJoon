const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [input, arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

input = parseInt(input);
arr = arr
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let sum = 0;
let answer = 0;
for (let i = 0; i < input; i++) {
  answer += arr[i] + sum;
  sum += arr[i];
}

console.log(answer);
