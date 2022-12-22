const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = parseInt(n);

let answer = 0;
let r = 1;
for (let i = 0; i < arr.length; i++) {
  answer += ((arr[i].charCodeAt() - 96) * r) % 1234567891;
  r *= 31;
  r %= 1234567891;
  answer %= 1234567891;
}
console.log(answer); //4739715
