const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
input = +input;

let answer = [];
// // 5로만 나눴을 때
if (input % 5 === 0) {
  answer.push(input / 5);
}

// 3으로만 나눴을 때
if (input % 3 === 0) {
  answer.push(input / 3);
}

// 5랑 3으로 나눴을 때
for (let i = 0; i < parseInt(input / 5); i++) {
  let temp = input;
  temp = temp - 5 * i;

  if (temp % 3 === 0) {
    answer.push(i + temp / 3);
  }
}
// 3랑 5으로 나눴을 때
for (let i = 0; i < parseInt(input / 3); i++) {
  let temp = input;
  temp = temp - 3 * i;

  if (temp % 5 === 0) {
    answer.push(i + temp / 5);
  }
}

console.log(answer.length === 0 ? -1 : Math.min(...answer));
