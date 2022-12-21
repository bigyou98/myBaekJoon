const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
let n = parseInt(input[0]);
let myCard = input[1].split(" ");
let m = parseInt(input[2]);
let cardDict = input[3].split(" ");

// 만약안되면 숫자로 바꿔보기
const obj = {};
for (let i = 0; i < n; i++) {
  if (myCard[i] in obj) {
    obj[myCard[i]]++;
  } else {
    obj[myCard[i]] = 1;
  }
}
let answer = [];
for (let i = 0; i < m; i++) {
  if (cardDict[i] in obj) {
    answer.push(obj[cardDict[i]]);
  } else {
    answer.push(0);
  }
}

console.log(answer.join(" "));
