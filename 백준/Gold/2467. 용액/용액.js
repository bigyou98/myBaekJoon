const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [n, arr] = require('fs').readFileSync(filePath).toString().trim().split('\n');
n = +n;
arr = arr.split(' ').map(Number);

let left = 0;
let right = n - 1;

let sum = Infinity;

let a, b;
while (left < right) {
  let temp_sum = arr[left] + arr[right];

  if (Math.abs(sum) > Math.abs(temp_sum)) {
    sum = temp_sum;
    a = arr[left];
    b = arr[right];
  }

  if (temp_sum === 0) {
    break;
  } else if (temp_sum > 0) {
    right--;
  } else {
    left++;
  }
}

console.log(`${a} ${b}`);
