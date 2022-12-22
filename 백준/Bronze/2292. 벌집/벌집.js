const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
input = parseInt(input);

let range = 1;
let block = 1;

while (block < input) {
  block += range * 6;
  range++;
}
console.log(range);
