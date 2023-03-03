const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = +n;
arr = arr.map((data) => data.split(" ").map(Number));

const visited = Array(n).fill(0);

let min = Number.MAX_SAFE_INTEGER;
const halfN = n / 2;
const dfs = (count, start) => {
  if (count === halfN) {
    const Choose_ARR = [];
    const Rest_ARR = [];
    for (let i = 0; i < n; i++) {
      if (visited[i]) {
        Choose_ARR.push(i);
      } else {
        Rest_ARR.push(i);
      }
    }
    let Choose_Sum = 0;
    let Rest_Sum = 0;
    for (let i = 0; i < halfN; i++) {
      for (let j = i + 1; j < halfN; j++) {
        Choose_Sum +=
          arr[Choose_ARR[i]][Choose_ARR[j]] + arr[Choose_ARR[j]][Choose_ARR[i]];
        Rest_Sum +=
          arr[Rest_ARR[i]][Rest_ARR[j]] + arr[Rest_ARR[j]][Rest_ARR[i]];
      }
    }
    min = Math.min(Math.abs(Choose_Sum - Rest_Sum), min);

    return;
  }

  for (let i = start; i < n; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      dfs(count + 1, i + 1);
      visited[i] = 0;
    }
  }
};

dfs(0, 0);

console.log(min);
