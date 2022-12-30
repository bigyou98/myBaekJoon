const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [input, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// K : 이미 갖고있는 랜선 수
// N : 필요한 랜선의 길이
const [K, N] = input.split(" ").map(Number);

// 갖고있는 K개의 랜선의 길이배열
const lines = arr.map(Number).sort((a, b) => a - b);

let min = 1;
let max = lines.at(-1);
while (min <= max) {
  let mid = Math.floor((min + max) / 2);
  let total = 0;
  lines.forEach((line) => {
    total += Math.floor(line / mid);
  });
  if (total >= N) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}
console.log(max);
