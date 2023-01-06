const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [x, y] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const solution = (x, y) => {
  let winRating = Math.floor((100 * y) / x);

  let left = 1;
  let right = x;
  let mid = 0;
  let tempRating = 0;

  if (winRating >= 99) {
    return -1;
  }
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    tempRating = Math.floor((100 * (y + mid)) / (x + mid));

    if (winRating < tempRating) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

console.log(solution(x, y));
