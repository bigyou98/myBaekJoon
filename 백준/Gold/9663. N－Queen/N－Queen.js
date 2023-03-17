const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [N] = require('fs').readFileSync(filePath).toString().trim().split('\n');
N = +N;

let answer = 0;
let visited = Array(N + 1).fill(0);

function check(index) {
  for (let i = 0; i < index; i++) {
    // 같은 열에 있는지
    // 대각선 상에 있는지
    if (visited[index] === visited[i] || 
      index - i === Math.abs(visited[index] - visited[i])) {
      return false;
    }
  }
  return true;
}

function DFS(index) {
  if (index === N) {
    answer++;
  }

  // 하나씩 체크하면서
  for (let i = 0; i < N; i++) {
    visited[index] = i; // index번째 행, i번째 열에 queen을 놓아본다.

    // 놓을 수 있다면 놓는다.
    if (check(index)) {
      DFS(index + 1);
    }
  }
}

DFS(0);
console.log(answer);
