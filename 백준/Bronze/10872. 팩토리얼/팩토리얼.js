const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let n = +require("fs").readFileSync(filePath).toString().trim();

let answer = 1;
for (let i = 1; i <= n; i++) {
  answer *= i;
}
console.log(answer);
