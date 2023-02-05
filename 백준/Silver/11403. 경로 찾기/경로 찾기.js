const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = +n;
arr = arr.map((data) => data.split(" ").map(Number));

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][k] && arr[k][j]) {
        arr[i][j] = 1;
      }
    }
  }
}
let answer = "";
for (let i = 0; i < n; i++) {
  answer += arr[i].join(" ");
  answer += "\n";
}
console.log(answer);
