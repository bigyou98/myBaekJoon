const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = parseInt(n);

arr.sort((a, b) => {
  let [aAge] = a.split(" ");
  aAge = parseInt(aAge);
  let [bAge] = b.split(" ");
  bAge = parseInt(bAge);
  return aAge - bAge;
});

console.log(arr.join("\n"));
