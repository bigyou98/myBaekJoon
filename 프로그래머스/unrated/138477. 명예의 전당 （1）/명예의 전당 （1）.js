function solution(k, score) {
  const answer = [];
  const temp = [];
  score.forEach((s) => {
    temp.push(s);
    temp.sort((a, b) => b - a);
    if (temp.length > k) {
      temp.pop();
    }
    const min = temp.at(-1);
    answer.push(min);
  });
  return answer;
}