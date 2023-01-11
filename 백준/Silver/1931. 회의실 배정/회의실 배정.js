const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

n = parseInt(n);
arr = arr
  .map((data) => data.split(" ").map(Number))
  .sort((a, b) => {
    // 끝나는 시간이 같다면
    if (a[1] === b[1]) {
      // 시작 시간으로 정렬하기
      return a[0] - b[0];
    }
    // 끝나는 시간이 빠른 순으로 정렬
    return a[1] - b[1];
  });

let currentTime = arr[0][1];
let count = 1;
for (let i = 1; i < n; i++) {
  const [start, end] = arr[i];
  if (start >= currentTime) {
    currentTime = end;
    count++;
  }
}

console.log(count);
