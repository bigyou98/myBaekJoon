const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = +n;
arr = arr.map((data) => data.split(" ").map(Number));

let answer = "";
for (let i = 0; i < n; i++) {
  const [a, b] = arr[i];
  answer += `${a + b}\n`;
}
console.log(answer);
