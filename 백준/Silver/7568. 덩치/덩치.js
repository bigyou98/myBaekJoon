const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = parseInt(n);
arr = arr.map((data) => data.split(" ").map(Number));
const answer = [];
for (let i = 0; i < n; i++) {
  let count = 1;
  const [curWeight, curHeight] = arr[i];
  for (let j = 0; j < n; j++) {
    if (i === j) {
      continue;
    }
    const [weight, height] = arr[j];
    if (curWeight < weight && curHeight < height) {
      count++;
    }
  }
  answer.push(count);
}
console.log(answer.join(" "));
