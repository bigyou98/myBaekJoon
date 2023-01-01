function solution(array, n) {
  let min = Number.MAX_SAFE_INTEGER;
  let answer = 0;

  array.sort((a, b) => a - b);
  for (const i of array) {
    let between = Math.abs(n - i);

    if (between < min) {
      min = between;
      answer = i;
    }
  }
  return answer;
}