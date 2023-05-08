const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [target] = require('fs').readFileSync(filePath).toString().trim().split('\n');

target = +target;

function get_primes(num) {
  const prime = [false, false, ...Array(num - 1).fill(true)];

  for (let i = 2; i * i <= num; i++) {
    if (prime[i]) {
      for (let j = i * 2; j <= num; j += i) {
        prime[j] = false;
      }
    }
  }

  return prime
    .map((v, i) => {
      if (v) {
        return i;
      }
    })
    .filter(Number);
}

const primes = get_primes(target);

let left_idx = 0;
let right_idx = 0;
let answer = 0;

let sum = 2;
while (left_idx <= right_idx) {
  if (sum === target) {
    answer++;
  }

  if (sum <= target) {
    right_idx++;
    sum += primes[right_idx];
  } else {
    sum -= primes[left_idx];
    left_idx++;
  }
}

console.log(answer);
