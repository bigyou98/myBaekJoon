const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let n = require("fs").readFileSync(filePath).toString().trim();
n = +n;

let base = 665;
while (n) {
  base++;
  if (base.toString().includes("666")) {
    n--;
  }
}
console.log(base);
