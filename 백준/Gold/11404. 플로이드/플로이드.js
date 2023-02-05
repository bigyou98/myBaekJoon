const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, m, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = +n;
m = +m;
arr = arr.map((data) => data.split(" ").map(Number));

const map = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));
for (let i = 1; i <= n; i++) {
  map[i][i] = 0;
}
for (let i = 0; i < m; i++) {
  const [start, end, pay] = arr[i];
  map[start][end] = Math.min(map[start][end], pay);
}

for (let k = 1; k <= n; k++) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      map[i][j] = Math.min(map[i][j], map[i][k] + map[k][j]);
    }
  }
}

let answer = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (map[i][j] === Infinity) {
      answer += `${0} `;
    } else {
      answer += `${map[i][j]} `;
    }
  }
  answer += "\n";
}
console.log(answer);
