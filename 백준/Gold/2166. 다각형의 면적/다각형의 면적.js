const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [n, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((data) => data.trim());

n = +n;
arr = arr.map((data) => data.split(' ').map(Number));
const [startX, startY] = arr[0];

let answer = 0;
const getTri = (a, b) => {
  const [ax, ay] = a;
  const [bx, by] = b;
  return (ax - startX) * (by - startY) - (ay - startY) * (bx - startX);
};
for (let i = 2; i < n; i++) {
  answer += getTri(arr[i], arr[i - 1]);
}

console.log((Math.abs(answer) * 0.5).toFixed(1));
