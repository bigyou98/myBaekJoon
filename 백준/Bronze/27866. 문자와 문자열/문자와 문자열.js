const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [data, n] = require('fs').readFileSync(filePath).toString().trim().split('\n');

n = +n;
console.log(data[n - 1]);
