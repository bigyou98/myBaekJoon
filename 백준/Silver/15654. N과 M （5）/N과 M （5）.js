const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [input, map] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = input.split(" ").map(Number);
map = map
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

function permutations(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  let result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.filter((_, index) => index !== idx);
    const perms = permutations(rest, n - 1);
    const combine = perms.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
}
let answer = permutations(map, m).reduce((acc, cur) => {
  return acc + cur.join(" ") + "\n";
}, "");
console.log(answer);
