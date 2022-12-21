const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = parseInt(n);

arr = [...new Set(arr)];
arr.sort((a, b) => {
  return b.length - a.length;
});

let answer = [];
for (let i = 1; i <= arr[0].length; i++) {
  answer.push(arr.filter((data) => data.length === i).sort());
}
answer = answer.flat();
answer.forEach((element) => {
  console.log(element);
});
