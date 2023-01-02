const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let answer = "";

for (let i = 0; i < input.length - 1; i++) {
  let min = 0;
  let max = 51;
  let mid = 0;
  while (min <= max) {
    mid = Math.floor((min + max) / 2);

    answer += `${mid} `;

    if (mid === input[i]) {
      break;
    }
    if (input[i] > mid) {
      min = mid;
    } else {
      max = mid;
    }
  }
  answer += "\n";
}

console.log(answer);
