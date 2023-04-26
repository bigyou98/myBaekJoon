const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [...sudoku] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((data) => data.trim().split('').map(Number));

// 이미 같은 숫자(k)가 있는지 확인하기
const check = (x, y, sudoku, k) => {
  for (let i = 0; i < 9; i++) if (sudoku[y][i] === k) return false;
  for (let i = 0; i < 9; i++) if (sudoku[i][x] === k) return false;
  x = parseInt(x / 3) * 3;
  y = parseInt(y / 3) * 3;
  for (let i = y; i < y + 3; i++) {
    for (let j = x; j < x + 3; j++) {
      if (sudoku[i][j] === k) return false;
    }
  }
  return true;
};
let end = false;
function sol(sudoku, blank) {
  if (blank === 0) {
    console.log(sudoku.map((data) => data.join('')).join('\n'));
    end = true;
  }

  if (end) {
    return;
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // 비어있는 자리를 발견하면.
      if (sudoku[i][j] === 0) {
        // 1부터 9까지 넣어본다.
        for (let k = 1; k <= 9; k++) {
          if (check(j, i, sudoku, k)) {
            sudoku[i][j] = k;
            sol(sudoku, blank - 1);
            sudoku[i][j] = 0;
          }
          if (k === 9) return;
        }
      }
    }
  }
}

let blank = 0;
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (sudoku[i][j] === 0) blank++;
  }
}

sol(sudoku, blank);
