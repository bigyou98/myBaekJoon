const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

n = parseInt(n);

for (let i = 0; i < n; i++) {
  const n = parseInt(arr.shift());
  const map = {};
  for (let j = 0; j < n; j++) {
    const [_, category] = arr.shift().split(" ");
    if (category in map) {
      map[category]++;
    } else {
      map[category] = 1;
    }
  }
  console.log(
    [...Object.values(map)].reduce((acc, cur) => acc * (cur + 1), 1) - 1
  );
}
