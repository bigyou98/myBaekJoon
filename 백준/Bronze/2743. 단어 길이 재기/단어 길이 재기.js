const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
console.log(input.length);
