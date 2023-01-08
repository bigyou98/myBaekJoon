const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

let input2 = parseInt(input);
let input5 = parseInt(input);

var answer2 = 0;
var answer5 = 0;
while (input5 >= 5) {
  answer5 += parseInt(input5 / 5);
  input5 /= 5;
}

while (input2 >= 2) {
  answer2 += parseInt(input2 / 2);
  input2 /= 2;
}
console.log(Math.min(answer2, answer5));