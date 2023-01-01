function solution(array, n) {
  let answer = 0;
  array.forEach((element) => {
    if (element === n) {
      answer++;
    }
  });
  return answer;
}
