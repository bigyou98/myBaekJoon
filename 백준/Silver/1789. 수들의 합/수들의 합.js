const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

input = parseInt(input);

let sum = 0;
let i = 1;
let cnt = 0;
while (sum < input) {
  sum += ++i;
  cnt++;
}

console.log(cnt);
