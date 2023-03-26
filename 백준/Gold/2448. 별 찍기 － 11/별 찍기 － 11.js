const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [[n]] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((data) => data.split(' ').map(Number));

let star = Array.from(Array(n + 1), () => {
  return Array(n * 2 + 1).fill(' ');
});

const starDFS = (n, x, y) => {
  if (n === 3) {
    {
      star[y][x] = '*';
      star[y + 1][x - 1] = '*';
      star[y + 1][x + 1] = '*';
      star[y + 2][x - 2] = '*';
      star[y + 2][x - 1] = '*';
      star[y + 2][x] = '*';
      star[y + 2][x + 1] = '*';
      star[y + 2][x + 2] = '*';
      return;
    }
  }
  starDFS(n / 2, x, y);
  starDFS(n / 2, x - n / 2, y + n / 2);
  starDFS(n / 2, x + n / 2, y + n / 2);
};

starDFS(n, n - 1, 0);

console.log(star.map((data) => data.join('')).join('\n'));
