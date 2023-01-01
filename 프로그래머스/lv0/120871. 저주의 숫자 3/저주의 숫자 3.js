function solution(n) {
  const answer = [];
  let i = 0;
  while (answer.length < n) {
    i++;
    if (i % 3 === 0 || i.toString().includes("3")) {
      continue;
    } else {
      answer.push(i);
    }
  }
  return answer[n - 1];
}
