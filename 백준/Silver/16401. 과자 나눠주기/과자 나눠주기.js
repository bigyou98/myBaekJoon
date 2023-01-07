const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [first, arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [m, n] = first.split(" ").map(Number);
arr = arr
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

const solution = (m, arr) => {
  let min = 1;
  let max = arr[0];

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    let total = arr
      .map((data) => {
        return Math.floor(data / mid);
      })
      .reduce((acc, cur) => {
        return acc + cur;
      }, 0);

    if (total >= m) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return max;
};

console.log(solution(m, arr));
