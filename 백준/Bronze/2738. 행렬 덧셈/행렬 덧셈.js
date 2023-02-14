const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [input, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = input.split(" ").map(Number);

arr = arr.map((data) => data.split(" ").map(Number));
const map1 = arr.slice(0, n);
const map2 = arr.slice(n);

let answer = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    answer += `${map1[i][j] + map2[i][j]} `;
  }
  answer += "\n";
}
console.log(answer);
