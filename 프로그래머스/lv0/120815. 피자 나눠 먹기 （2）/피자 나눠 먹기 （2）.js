function solution(n) {
  let temp = 1;
  while (true) {
    let qwe = n * temp;
    if (qwe % 6 === 0) {
      return qwe / 6;
    }
    temp++;
  }
}
