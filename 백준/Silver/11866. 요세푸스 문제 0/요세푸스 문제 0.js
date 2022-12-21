const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, k] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let queue = Array.from(Array(n), (_, i) => {
  return i + 1;
});

const answer = [];
while (queue.length > 0) {
  for (let i = 0; i < k - 1; i++) {
    queue.push(queue.shift());
  }
  answer.push(queue.shift());
}
console.log(`<${answer.join(", ")}>`);
