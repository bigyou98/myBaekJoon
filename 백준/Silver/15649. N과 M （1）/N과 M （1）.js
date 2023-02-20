const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, m] = require("fs").readFileSync(filePath).toString().trim().split(" ");
n = +n;
m = +m;

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

const answer = permutations(
  Array.from(Array(n), (_, i) => i + 1),
  m
);
let str = "";
answer.forEach((data) => {
  str += `${data.join(" ")}\n`;
});
console.log(str);
