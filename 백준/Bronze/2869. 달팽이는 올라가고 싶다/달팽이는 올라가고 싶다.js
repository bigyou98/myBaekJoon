const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [A, B, V] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(Math.ceil((V - B) / (A - B)));
