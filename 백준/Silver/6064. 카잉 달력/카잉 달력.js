const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [t, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
t = +t;
const map = arr.map((data) => data.split(" ").map(Number));

let answer = [];
for (let index = 0; index < t; index++) {
  let [M, N, X, Y] = map[index];
  const max = lcm(M, N);
  let x = X;
  let y = Y;
  while (true) {
    if (x > max || y > max) {
      answer.push(-1);
      break;
    } else if (x > y) {
      y += N;
    } else if (x < y) {
      x += M;
    } else {
      answer.push(x);
      break;
    }
  }
}
console.log(answer.join("\n"));

function gcd(a, b) {
  if (b == 0) return a;
  return a > b ? gcd(b, a % b) : gcd(a, b % a);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
