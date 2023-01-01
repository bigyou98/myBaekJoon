function solution(money) {
  var answer = [];
  answer.push(Number.parseInt(money / 5500));
  answer.push(money % 5500);
  return answer;
}
