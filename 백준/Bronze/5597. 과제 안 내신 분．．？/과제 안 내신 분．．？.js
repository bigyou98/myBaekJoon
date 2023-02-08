const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const arr = Array.from(Array(30), (_, i) => {
  return i + 1;
});

input.forEach((data) => {
  arr[data - 1] = false;
});

const filtered = arr.filter((data) => data);
console.log(`${filtered[0]}\n${filtered[1]}`);
