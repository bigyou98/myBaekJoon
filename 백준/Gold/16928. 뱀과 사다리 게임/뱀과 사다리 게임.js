const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [input, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.split(" ").map(Number);

const map = arr.slice().map((data) => data.trim().split(" ").map(Number));

const visitedArr = Array(101).fill(false);

let answer = 0;

const queue = [[1, 0]];
visitedArr[1] = true;

const sadariorSnake = map.map((data) => {
  return data[0];
});

while (queue.length && !visitedArr[100]) {
  const [currentValue, diceCount] = queue.shift();

  for (let i = 6; i >= 1; i--) {
    const nextValue = currentValue + i;
    const find = sadariorSnake.indexOf(nextValue);

    if (nextValue > 100) {
      continue;
    }

    // 사다리 탈수 있다면
    if (find !== -1 && !visitedArr[nextValue]) {
      const endPoint = map[find][1];
      visitedArr[nextValue] = true;
      visitedArr[endPoint] = true;

      queue.push([endPoint, diceCount + 1]);
    }
    // 방문하지 않았다면
    if (!visitedArr[nextValue]) {
      visitedArr[nextValue] = true;
      queue.push([nextValue, diceCount + 1]);
    }
  }
  answer = diceCount + 1;
}
console.log(answer);
