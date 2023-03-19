const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [a, b] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
console.log((a - b) * (a + b));
