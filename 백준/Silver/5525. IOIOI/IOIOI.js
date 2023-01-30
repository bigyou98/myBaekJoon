const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, m, s] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

n = +n;
m = +m;

let result = 0; // 최종 값
let patternCnt = 0; // `IOI` 패턴 연속 횟수
for (let i = 1; i < m - 1; i++) {
  if (s[i - 1] == "I" && s[i] == "O" && s[i + 1] == "I") {
    patternCnt++;
    if (patternCnt == n) {
      patternCnt--;
      result++;
    }
    i++;
  } else patternCnt = 0;
}
console.log(result);
