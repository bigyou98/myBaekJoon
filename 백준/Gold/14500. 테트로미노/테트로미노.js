const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [input, ...map] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = input.split(" ").map(Number);

map = map.map((data) => data.split(" ").map(Number));

let answer = 0;

const cases = [
  [
    { x: 0, y: 1 },
    { x: 0, y: 2 },
    { x: 0, y: 3 },
  ],
  [
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 3, y: 0 },
  ],
  [
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
  ],
  [
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
  ],
  [
    { x: 0, y: 1 },
    { x: -1, y: 1 },
    { x: -1, y: 2 },
  ],
  [
    { x: 1, y: 0 },
    { x: 1, y: -1 },
    { x: 2, y: -1 },
  ],
  [
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: 1, y: 2 },
  ],
  [
    { x: 0, y: 1 },
    { x: 0, y: 2 },
    { x: 1, y: 1 },
  ],
  [
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: 0 },
  ],
  [
    { x: -1, y: 1 },
    { x: 0, y: 1 },
    { x: 0, y: 2 },
  ],
  [
    { x: 1, y: 0 },
    { x: 1, y: -1 },
    { x: 2, y: 0 },
  ],
  [
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
  ],
  [
    { x: -1, y: 0 },
    { x: -1, y: 1 },
    { x: -1, y: 2 },
  ],
  [
    { x: 0, y: -1 },
    { x: -1, y: -1 },
    { x: -2, y: -1 },
  ],
  [
    { x: 1, y: 0 },
    { x: 1, y: -1 },
    { x: 1, y: -2 },
  ],
  [
    { x: 0, y: -1 },
    { x: 1, y: -1 },
    { x: 2, y: -1 },
  ],
  [
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 1, y: 2 },
  ],
  [
    { x: 0, y: 1 },
    { x: -1, y: 1 },
    { x: -2, y: 1 },
  ],
  [
    { x: -1, y: 0 },
    { x: -1, y: -1 },
    { x: -1, y: -2 },
  ],
];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    const current = map[i][j];
    for (let k = 0; k < cases.length; k++) {
      let temp = current;
      for (const { x, y } of cases[k]) {
        let nx = i + x;
        let ny = j + y;
        if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
          break;
        }
        temp += map[nx][ny];
      }
      if (temp > answer) {
        answer = temp;
      }
    }
  }
}
console.log(answer);
