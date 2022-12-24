const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = parseInt(n);
arr = arr.map((data) => data.split(" ").map(Number));

arr.sort((a, b) => {
  return a[1] === b[1] ? a[0] - b[0] : a[1] - b[1];
});
let answer = "";
for (let i = 0; i < n; i++) {
  answer += arr[i].join(" ") + "\n";
}
console.log(answer);
