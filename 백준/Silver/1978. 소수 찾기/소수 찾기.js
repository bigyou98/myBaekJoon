const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = parseInt(n);
arr = arr[0].split(" ").map(Number);

function is_prime(num) {
  if (num === 0 || num === 1) {
    return false;
  }

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let answer = 0;
for (let i = 0; i < arr.length; i++) {
  if (is_prime(arr[i])) {
    answer++;
  }
}

console.log(answer);
