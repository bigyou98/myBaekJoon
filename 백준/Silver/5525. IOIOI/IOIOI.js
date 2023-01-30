const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, m, s] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

n = +n;
m = +m;

let count = 0;
for (let i = 0; i < m - 2 * n; i++) {
  if (s[i] === "I") {
    const temp = ["I"];
    count++;
    for (let j = i + 1; j < i + 2 * n + 1; j++) {
      if (temp.at(-1) !== s[j]) {
        temp.push(s[j]);
      } else {
        count--;
        break;
      }
    }
  }
}
console.log(count);
