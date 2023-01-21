const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
const arr = input
  .split("-")
  .map((data) => data.split("+").map(Number))
  .map((data) => data.reduce((acc, cur) => acc + cur));
let sum = arr[0];
for (let i = 1; i < arr.length; i++) {
  sum -= arr[i];
}

console.log(sum);
