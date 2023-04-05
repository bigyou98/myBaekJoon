const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [input, ...map] = require('fs').readFileSync(filePath).toString().trim().split('\n');

input = +input;
const [v1, v2] = map.map((data) => data.trim());

let answer = 0;
for (let i = 0; i < input; i++) {
  if (v1[i] !== v2[i]) {
    answer++;
  }
}

console.log(answer);
