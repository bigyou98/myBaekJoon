const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [q, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let [m, k] = q.split(" ").map(Number);

arr = arr.map(Number).reverse();
let answer = 0;
for (let i = 0; i < m; i++) {
  const element = arr[i];
  const temp = parseInt(k / element);
  if (temp >= 1) {
    answer += temp;
    k = k - element * temp;
    if (k === 0) {
      console.log(answer);
      break;
    }
  }
}
