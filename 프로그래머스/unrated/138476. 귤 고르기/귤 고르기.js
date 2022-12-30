// k를 선택할 때 서로 다른 종류의 수에 최솟값을 반환
function solution(k = 0, tangerine = []) {
  // 1개씩만 나오게
  const obj = {};
  tangerine.forEach((t) => {
    if (t in obj) {
      obj[t]++;
    } else {
      obj[t] = 1;
    }
  });
  const entry = Object.entries(obj).sort((a, b) => {
    return a[1] - b[1];
  });
  let answer = 0;
  while (k !== 0) {
    const [_, count] = entry.pop();
    k = k - count;
    answer++;
    if (k < 0) {
      break;
    }
  }
  return answer;
}