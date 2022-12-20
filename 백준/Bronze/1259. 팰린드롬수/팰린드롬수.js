const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  console.log(
    input[i] === input[i].split("").reverse().join("") ? "yes" : "no"
  );
}
