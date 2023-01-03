const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

n = Number(n);
arr = arr.map(Number);
let answer = "";
for (let i = 0; i < n; i++) {
  const fibo = [
    [1, 0],
    [0, 1],
  ];

  for (let j = 2; j <= arr[i]; j++) {
    fibo[j] = [
      fibo[j - 1][0] + fibo[j - 2][0],
      fibo[j - 1][1] + fibo[j - 2][1],
    ];
  }

  answer += `${fibo[arr[i]].join(" ")}\n`;
}
console.log(answer);
