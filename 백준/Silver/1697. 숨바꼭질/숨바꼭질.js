const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, k] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let queue = [];

const visited = Array(100001).fill(false);

// 현재위치, 걸리는 시간
queue.push([n, 0]);

while (queue.length !== 0) {
  let [witch, time] = queue.shift();

  if (witch === k) {
    console.log(time);
    break;
  } else {
    // 방문하지 않았다면
    for (next of [witch - 1, witch + 1, witch * 2]) {
      if (!visited[next] && next >= 0 && next <= 100000) {
        visited[next] = 1;
        queue.push([next, time + 1]);
      }
    }
  }
}
