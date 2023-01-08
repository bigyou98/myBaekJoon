const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [input, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.split(" ").map(Number);

const map = new Map();

for (let i = 0; i < n; i++) {
  map.set(arr[i]);
}

const qwe = [];
for (let i = n; i < n + m; i++) {
  if (map.has(arr[i])) {
    qwe.push(arr[i]);
  }
}

let answer = `${qwe.length}\n`;
qwe.sort();
answer += qwe.join("\n");
console.log(answer);
