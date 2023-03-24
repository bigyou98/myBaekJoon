const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [[n, m], trues, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((data) => data.split(' ').map(Number));

function solution(n, m, trues, arr) {
  if (trues[0] === 0) {
    return m;
  }
  let answer = m;
  const [truesLength, ...truesArr] = trues;
  const honesty = Array(n + 1).fill(false);
  const map = Array.from(Array(n + 1), () => {
    return [];
  });
  // 방문처리
  const queue = [];
  for (let i = 0; i < truesLength; i++) {
    honesty[truesArr[i]] = true;
    queue.push(truesArr[i]);
  }

  const pushes = (value, arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        continue;
      }
      map[value].push(arr[i]);
    }
  };
  for (let i = 0; i < m; i++) {
    const [length, ...temp] = arr[i];
    for (let j = 0; j < length; j++) {
      pushes(temp[j], temp);
    }
  }
  // 방문처리하기

  while (queue.length) {
    const current = queue.shift();
    const currentMap = map[current];
    for (let i = 0; i < currentMap.length; i++) {
      // 방문하지 않았다면 추가하고 방문처리
      if (!honesty[currentMap[i]]) {
        honesty[currentMap[i]] = true;
        queue.push(currentMap[i]);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    const [length, ...party] = arr[i];
    for (let j = 0; j < length; j++) {
      // 진실을 알고 있는 녀석이라면
      if (honesty[party[j]]) {
        answer--;
        break;
      }
    }
  }
  return answer;
}
console.log(solution(n, m, trues, arr));
