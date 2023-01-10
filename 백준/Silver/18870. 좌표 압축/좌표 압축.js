const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [input, arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

input = parseInt(input);
const arrMap = arr.split(" ").map(Number);

// 자신보다 작은 것의 개수로 대체한다는 말

const set = [...new Set(arrMap)];
set.sort((a, b) => a - b);

const dict = {};
set.forEach((v, i) => {
  dict[v] = i;
});

console.log(
  arrMap
    .map((data) => {
      return dict[data];
    })
    .join(" ")
);
