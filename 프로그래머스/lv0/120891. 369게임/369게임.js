function solution(order) {
  let answer = 0;
  order = order.toString();
  for (let i = 0; i < order.length; i++) {
    let temp = Number(order[i]);
    if (temp % 3 === 0 && temp !== 0) {
      answer++;
    }
  }
  return answer;
}