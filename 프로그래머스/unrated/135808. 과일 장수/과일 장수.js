function solution(k, m, score = []) {
  score.sort((a, b) => b - a);
  const count = Math.floor(score.length / m);
  let answer = 0;
  for (let i = 1; i <= count; i++) {
    answer += score.slice((i - 1) * m, i * m).at(-1) * m;
  }
  return answer;
}
