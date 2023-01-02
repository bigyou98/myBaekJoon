const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, nArr, m, mArr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = parseInt(n);
m = parseInt(m);
nArr = nArr
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
mArr = mArr.split(" ").map(Number);

let answer = "";

for (let i = 0; i < m; i++) {
  let min = 0;
  let max = n;
  let find = false;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    if (nArr[mid] === mArr[i]) {
      find = true;
      break;
    }
    if (nArr[mid] < mArr[i]) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  answer += find ? "1 " : "0 ";
}
console.log(answer);
