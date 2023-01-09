const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

input = parseInt(input);
const solution = (n) => {
  const arr = [];
  arr.push(0, 1, 2);
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 10007;
  }
  return arr[n];
};

console.log(solution(input));
