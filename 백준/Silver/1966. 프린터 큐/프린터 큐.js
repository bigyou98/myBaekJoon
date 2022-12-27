const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...temp] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const arr = [];
for (let i = 0; i < temp.length; i += 2) {
  arr.push(
    temp.slice(i, i + 2).map((data) => {
      return data.split(" ").map(Number);
    })
  );
}

const answer = [];

for (let i = 0; i < n; i++) {
  let [[length, findIndex], premiArr] = arr[i];
  premiArr = premiArr.map((data, index) => [data, index]);
  const visited = Array(length).fill(false);
  let count = 0;
  // 방문했다면 종료
  while (!visited[findIndex]) {
    // 가장 큰 값 찾기
    const max = Math.max(...premiArr.map((data) => data[0]));
    const [curData, curIndex] = premiArr.shift();

    // 맨앞의 값이 가장 큰값인지 비교하기
    if (max === curData) {
      // 제대로 뺐다면
      count++;
      visited[curIndex] = true;
    } else {
      // 아니라면
      premiArr.push([curData, curIndex]);
    }
  }
  answer.push(count);
}
console.log(answer.join("\n"));
