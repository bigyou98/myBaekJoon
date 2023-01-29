const { deflateSync } = require("zlib");

const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = +n;
const map = arr.map((data) => data.split("").map(Number));

let answer = "";
const resolve = (n, x, y) => {
  const standard = map[x][y];
  let count = 0;
  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      if (standard === map[i][j]) {
        count++;
      }
    }
  }
  if (n ** 2 === count) {
    answer += `${standard}`;
  } else {
    answer += "(";
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        resolve(n / 2, x + i * (n / 2), y + j * (n / 2));
      }
    }
    answer += ")";
  }
};

resolve(n, 0, 0);
console.log(answer);
