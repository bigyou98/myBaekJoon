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

let result = "";
const temp = [];

const dfs = () => {
  if (temp.length === m) {
    result += `${temp.join(" ")}\n`;
    return;
  }
  for (let i = 0; i < n; i++) {
    if (temp.at(-1) > arr[i]) {
      continue;
    }
    temp.push(arr[i]);
    dfs();
    temp.pop();
  }
};

dfs();
console.log(result);
