function solution(slice, n) {
  let answer = Number.parseInt(n / slice);
  return Number.isInteger(n / slice) ? answer : answer + 1;
}
