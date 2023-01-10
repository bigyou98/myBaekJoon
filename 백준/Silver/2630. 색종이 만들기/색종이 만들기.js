const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [input, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

input = parseInt(input);
arr = arr.map((data) => data.split(" ").map((data2) => Number(data2)));

var white = 0;
var blue = 0;

function checkAllSame(x, y, length) {
  let standard = arr[x][y];
  for (let i = x; i < x + length; i++) {
    for (let j = y; j < y + length; j++) {
      if (standard !== arr[i][j]) {
        checkAllSame(x, y, length / 2);
        checkAllSame(x, y + length / 2, length / 2);
        checkAllSame(x + length / 2, y, length / 2);
        checkAllSame(x + length / 2, y + length / 2, length / 2);
        return false;
      }
    }
  }
  // 모두다 같은 경우에만 이리로온다.
  if (standard === 1) {
    blue += 1;
  } else {
    white += 1;
  }
}
checkAllSame(0, 0, input);
console.log(white);
console.log(blue);
