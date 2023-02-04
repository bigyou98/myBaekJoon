const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let arr = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(
  arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0)
);
