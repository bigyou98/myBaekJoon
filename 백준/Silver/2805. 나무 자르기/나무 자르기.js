const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const trees = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let min = 0;
let max = trees.at(-1);

let answer = 0;
while (min <= max) {
  // 잘랐을 때 가져갈 나무길이
  let total = 0;
  // 중간값
  let mid = Math.floor((min + max) / 2);
  trees.forEach((tree) => {
    // 남는 값이 있을 경우에만 포함하기
    let garbage = tree - mid;
    if (garbage > 0) {
      total += garbage;
    }
  });

  // total이 M보다 큰 경우에는
  if (total >= M) {
    min = mid + 1;
    // 더 큰값 찾는중 mid가 최적의 값임!
    if (mid > answer) {
      answer = mid;
    }
  } else {
    max = mid - 1;
  }

  // total이 M보다 작을 경우에는 기준 다시 세워야함
}
console.log(answer);
