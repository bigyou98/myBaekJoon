const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [[n, S], arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((data) => data.split(' ').map(Number));

let answer = Infinity;

let left = 0;
let right = 0;
let sum = 0;

for (left; left < n; left++) {
  while (sum < S && right < n) {
    sum += arr[right++];
  }

  if (sum >= S) {
    answer = Math.min(right - left, answer);
  }
  sum -= arr[left];
}

console.log(answer === Infinity ? 0 : answer);
