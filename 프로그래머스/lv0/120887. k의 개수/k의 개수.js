function solution(i, j, k) {
  let answer = 0;
  for (let num = i; num <= j; num++) {
    let numN = num.toString();
    for (let qq = 0; qq < numN.length; qq++) {
      if (Number(numN[qq]) === k) {
        answer++;
      }
    }
  }
  return answer;
}