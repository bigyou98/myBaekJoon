const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

arr = arr.map(Number);
arr.sort((a, b) => a - b);

const obj = {};

for (const num of arr) {
  if (num in obj) {
    obj[num]++;
  } else {
    obj[num] = 0;
  }
}
const answer = [];
// 1. 평균
answer.push(
  Math.round(
    arr.reduce((acc, cur) => {
      return acc + cur;
    }, 0) / n
  )
);
// 2. sort후 중앙 값
answer.push(arr[parseInt(n / 2)]);
// 3. 가장 많이 나온 수
const max = Math.max(...Object.values(obj));
const qwe = Object.entries(obj)
  .filter((data) => data[1] === max)
  .map((data) => {
    return Number(data[0]);
  });
qwe.sort((a, b) => a - b);
answer.push(qwe.length === 1 ? qwe[0] : qwe[1]);

// 4. 최대값과 최소값의 차이
answer.push(arr.at(-1) - arr[0]);

console.log(answer.join("\n"));
