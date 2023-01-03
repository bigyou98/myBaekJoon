const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [input, ...markMap] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let [n, m, inventory] = input.split(" ").map(Number);

markMap = markMap.map((data) => {
  return data.split(" ").map(Number);
});

let ansTime = Infinity;
let ansHeight = -1;

for (let h = 0; h <= 256; h++) {
  let inven = 0;
  let removeCnt = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // 기존의 높이에서 0부터 256까지 증가하는거 빼기
      // h보다 얼마나 더 높은지
      const curH = markMap[i][j] - h;
      if (curH < 0) {
        // 가지고있던 거에서 빼서 쌓아야함
        inven -= curH;
      } else {
        // h보다 더 높으니 삭제해야할 것임
        removeCnt += curH;
      }
    }
  }

  if (removeCnt + inventory >= inven) {
    let time = 2 * removeCnt + inven;
    if (ansTime >= time) {
      ansTime = time;
      ansHeight = h;
    }
  }
}

// 정답 콘솔 찍기
console.log(ansTime, ansHeight);
