const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let n = require('fs').readFileSync(filePath).toString().trim();

n = +n;

const visited = Array(n + 1).fill(false);

visited[n] = true;
const queue = [];
queue.push([n, n.toString()]);

let temp = '';
while (true) {
  const [value, road] = queue.shift();

  if (value == 1) {
    temp = road;
    break;
  }
  if (value % 3 === 0 && !visited[value / 3]) {
    visited[value / 3] = true;
    queue.push([value / 3, road + ',' + (value / 3).toString()]);
  }
  if (value % 2 === 0 && !visited[value / 2]) {
    visited[value / 2] = true;
    queue.push([value / 2, road + ',' + (value / 2).toString()]);
  }
  if (!visited[value - 1]) {
    visited[value - 1] = true;
    queue.push([value - 1, road + ',' + (value - 1).toString()]);
  }
}

const answer = temp.split(',');
console.log(answer.length - 1);
console.log(answer.join(' '));
