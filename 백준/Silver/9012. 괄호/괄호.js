const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = parseInt(n);
// 올바른 괄호 문자열(VPS)이면 “YES”, 아니면 “NO”

function solution(s) {
  if (s[0] === ")") {
    return false;
  }

  const arr = [...s];

  let left = 0;
  for (const i of arr) {
    if (left < 0) {
      return false;
    }

    if (i === "(") {
      left++;
    } else if (i === ")") {
      left--;
    }
  }

  return left === 0 ? true : false;
}

for (let i = 0; i < n; i++) {
  console.log(solution(arr[i]) ? "YES" : "NO");
}
