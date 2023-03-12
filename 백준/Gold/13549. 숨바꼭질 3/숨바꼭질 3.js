const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, k] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const visited = Array(100001).fill(0);
visited[n] = Number.MAX_SAFE_INTEGER;

const queue = [[n, 0]];

while (!visited[k]) {
  const [current, count] = queue.shift();
  let nextCount = count + 1;

  for (let i = current; i <= 100000; i *= 2) {
    if (i === 0) {
      break;
    }
    if (count === 0 && !visited[i]) {
      visited[i] = Number.MAX_SAFE_INTEGER;
      queue.push([i, count]);
      if (visited[k]) {
        break;
      }
    }
    if (!visited[i]) {
      visited[i] = count;
      queue.push([i, count]);
      if (visited[k]) {
        break;
      }
    }
  }

  let prev = current - 1;
  if (prev >= 0 && !visited[prev]) {
    visited[prev] = nextCount;
    queue.push([prev, nextCount]);
  }

  let next = current + 1;
  if (next <= 100000 && !visited[next]) {
    visited[next] = nextCount;
    queue.push([next, nextCount]);
  }
}

console.log(visited[k] === Number.MAX_SAFE_INTEGER ? 0 : visited[k]); //4
