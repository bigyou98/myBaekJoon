const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = parseInt(n);

const map = arr.map((data) => data.split(" ").map(Number));

const answer = [0, 0, 0];
const fn = (n, x, y) => {
  let standard = map[x][y];
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let data = map[x + i][y + j];
      if (data === standard) {
        count++;
      } else {
        break;
      }
    }
  }
  if (n ** 2 === count) {
    answer[standard + 1]++;
  } else {
    n /= 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        fn(n, x + i * n, y + j * n);
      }
    }
  }
};

fn(n, 0, 0);
console.log(answer.join("\n"));
