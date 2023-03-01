const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let str = require("fs").readFileSync(filePath).toString().trim();

let answer = "";
for (const s of str) {
  let code = s.charCodeAt();

  if (code >= 65 && code <= 90) {
    answer += String.fromCharCode(code + 32);
  } else {
    answer += String.fromCharCode(code - 32);
  }
}
console.log(answer);
