const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, arr, m] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = parseInt(n);
arr = arr.split(" ").map(Number);
m = parseInt(m);

const solution = (n, arr, m) => {
  let min = 0;
  let mid = 0;
  let max = m;

  let arrSum = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  // 줄 수 있는 경우
  if (arrSum <= m) {
    return Math.max(...arr);
  }

  while (min <= max) {
    mid = Math.floor((min + max) / 2);

    let sum = arr.reduce((acc, cur) => {
      // 중간값보다 큰경우
      if (cur > mid) {
        return mid + acc;
      } else {
        return acc + cur;
      }
    }, 0);

    if (sum > m) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return max;
};

console.log(solution(n, arr, m));
