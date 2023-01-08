const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [input, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

input = parseInt(input);
arr = arr.map(Number);

let maxNum = Math.max(...arr);
let answer = "";
const DP = Array(+1).fill(0);
DP[0] = 0;
DP[1] = 1;
DP[2] = 2;
DP[3] = 4;
for (let i = 4; i <= maxNum; i++) {
  DP[i] = DP[i - 1] + DP[i - 2] + DP[i - 3];
}

// 정답 출력
for (let i = 0; i < input; i++) {
  answer += `${DP[arr[i]]}\n`;
}
console.log(answer);
