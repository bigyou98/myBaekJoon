const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, r, c] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let count = 0;
const divide = (row, col, size) => {
  if (row === r && col === c) {
    // 좌표 찾음
    console.log(count);
    return;
  }
  
  if (r >= row && r < row + size && c >= col && c < col + size) {
    size = parseInt(size / 2);
    divide(row, col, size);
    divide(row, col + size, size);
    divide(row + size, col, size);
    divide(row + size, col + size, size);
  } else count += size * size; // 좌표 못 찾음!
};

divide(0, 0, Math.pow(2, n));
