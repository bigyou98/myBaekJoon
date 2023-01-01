function solution(n, left, right) {
  const answer = [];

  for (let i = left; i <= right; i++) {
    let rest = i % n;
    let share = parseInt(i / n);
    answer.push(Math.max(rest, share) + 1);
  }

  return answer;
}