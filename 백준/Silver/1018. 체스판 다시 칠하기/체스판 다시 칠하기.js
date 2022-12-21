const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [x, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let answer = [];
const [n, m] = x.split(" ").map(Number);

for (let qq = 0; qq <= n - 8; qq++) {
  for (let ww = 0; ww <= m - 8; ww++) {
    {
      let count = 0;
      const standard = "W";
      const rest = standard === "W" ? "B" : "W";

      for (let i = qq; i < qq + 8; i++) {
        let temp = i % 2 === 0 ? standard : rest;
        for (let j = ww; j < ww + 8; j++) {
          let origin_current =
            j % 2 === 0 ? temp : temp === standard ? rest : standard;
          if (origin_current !== arr[i][j]) {
            count++;
          }
        }
      }
      answer.push(count);
    }
  }
}

for (let qq = 0; qq <= n - 8; qq++) {
  for (let ww = 0; ww <= m - 8; ww++) {
    {
      let count = 0;
      const standard = "B";
      const rest = standard === "W" ? "B" : "W";

      for (let i = qq; i < qq + 8; i++) {
        let temp = i % 2 === 0 ? standard : rest;
        for (let j = ww; j < ww + 8; j++) {
          let origin_current =
            j % 2 === 0 ? temp : temp === standard ? rest : standard;
          if (origin_current !== arr[i][j]) {
            count++;
          }
        }
      }
      answer.push(count);
    }
  }
}
console.log(Math.min(...answer));
