// 6497 js
const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [[n, b], ...a] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((data) => data.split(' ').map(Number));
  
function mulMat(mata, matb) {
  // tmpmat init
  let tmpmat = new Array(n);
  for (let i = 0; i < n; i++) {
    tmpmat[i] = new Array(n);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      tmpmat[i][j] = 0;
    }
  }

  // mul
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        tmpmat[i][j] += mata[i][k] * matb[k][j];
      }
      tmpmat[i][j] %= 1000;
    }
  }

  return tmpmat;
}
let tmpmat = new Array(n);
for (let i = 0; i < n; i++) {
  tmpmat[i] = new Array(n);
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    tmpmat[i][j] = 0;
  }
  tmpmat[i][i] = 1;
}

while (b) {
  if (b % 2 == 1) {
    tmpmat = mulMat(tmpmat, a);
    b--;
  }
  b /= 2;
  a = mulMat(a, a);
}

// answer
for (let i = 0; i < n; i++) {
  let tmp = '';
  for (let j = 0; j < n; j++) {
    tmp += tmpmat[i][j] + ' ';
  }
  console.log(tmp);
}
