const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [x, y] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
console.log(Math.abs(y - x));
