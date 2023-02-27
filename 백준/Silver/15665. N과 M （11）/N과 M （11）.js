const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [input, arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = input.split(" ").map(Number);
arr = arr
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let result = [];
const temp = [];
const visited = Array(n).fill(false);

const dfs = () => {
  if (temp.length === m) {
    result.push(temp.join(" "));
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i]);
    dfs();
    temp.pop();
  }
};

dfs();
console.log([...new Set(result)].join("\n"));
