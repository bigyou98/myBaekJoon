const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

n = +n;
let answer = "";

for (let i = 0; i < n; i++) {
  const element = arr[i];
  if (element.length === 1) {
    answer += `${element.repeat(2)}\n`;
  } else {
    answer += `${element[0] + element.at(-1)}\n`;
  }
}

console.log(answer);
