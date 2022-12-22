const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
input = parseInt(input);

const arr = [];
for (let i = 1; i < input; i++) {
  let result =
    i
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, cur) => {
        return acc + cur;
      }, 0) + i;
  if (result === input) {
    arr.push(i);
  }
}
console.log(arr.length===0? 0:Math.min(...arr));
