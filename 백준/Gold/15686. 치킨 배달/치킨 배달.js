const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [input, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.split(" ").map(Number);
arr = arr.map((data) => data.split(" ").map(Number));

const home = [];
const chicken_home = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] === 1) {
      home.push([i, j]);
    }
    if (arr[i][j] === 2) {
      chicken_home.push([i, j]);
    }
  }
}

const chicken_check = Array(chicken_home.length).fill(false);
const chicken_distance = Array.from(Array(home.length), () => {
  return [];
});

const answer = [];

function dfs(count, start) {
  if (count === m) {
    answer.push(
      chicken_distance.reduce((acc, cur) => {
        return acc + Math.min(...cur);
      }, 0)
    );

    return;
  }

  for (let i = start; i < chicken_home.length; i++) {
    if (!chicken_check[i]) {
      chicken_check[i] = true;
      const [x1, y1] = chicken_home[i];
      // 집마다 치킨거리 갱신해주기
      for (let j = 0; j < home.length; j++) {
        const [x2, y2] = home[j];
        chicken_distance[j].push(Math.abs(x2 - x1) + Math.abs(y2 - y1));
      }
      dfs(count + 1, i + 1);
      for (let j = 0; j < home.length; j++) {
        chicken_distance[j].pop();
      }
      chicken_check[i] = false;
    }
  }
}

dfs(0, 0);

console.log(Math.min(...answer));
