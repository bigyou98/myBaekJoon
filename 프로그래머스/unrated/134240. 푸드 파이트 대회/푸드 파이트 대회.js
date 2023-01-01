function solution(food) {
  let answer = "";
  for (let i = 1; i < food.length; i++) {
    answer += `${i}`.repeat(parseInt(food[i] / 2));
  }
  answer += "0";

  for (let i = food.length - 1; i >= 1; i--) {
    answer += `${i}`.repeat(parseInt(food[i] / 2));
  }

  return answer;
}