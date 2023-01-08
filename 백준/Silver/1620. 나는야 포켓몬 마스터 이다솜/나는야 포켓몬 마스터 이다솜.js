const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [input, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.split(" ").map(Number);

const map = new Map();
for (let i = 0; i < n; i++) {
  map.set(arr[i], i + 1);
  map.set(i + 1, arr[i]);
}
let mArr = arr.slice(n, n + m);

let answer = "";
for (let i = 0; i < m; i++) {
  if (Number.isInteger(Number(mArr[i]))) {
    answer += `${map.get(Number(mArr[i]))}\n`;
  } else {
    answer += `${map.get(mArr[i])}\n`;
  }
}

console.log(answer);
