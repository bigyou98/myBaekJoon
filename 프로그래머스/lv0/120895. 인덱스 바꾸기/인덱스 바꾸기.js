function solution(my_string, num1, num2) {
  let one = my_string[num1];
  let two = my_string[num2];

  let answer = "";

  for (let i = 0; i < my_string.length; i++) {
    if (i === num1) {
      answer += two;
    } else if (i === num2) {
      answer += one;
    } else {
      answer += my_string[i];
    }
  }
  return answer;
}
