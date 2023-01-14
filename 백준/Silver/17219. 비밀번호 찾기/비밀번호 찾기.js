const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [q, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let [n, m] = q.split(" ").map(Number);

arr = arr.map((data) => data.split(" "));

let answer = "";
const quest = arr.slice(n);
const map = new Map();
arr.slice(0, n).forEach(([value, key]) => {
  map.set(value, key);
});

for (let i = 0; i < m; i++) {
  answer += `${map.get(quest[i][0])}\n`;
}

console.log(answer);
