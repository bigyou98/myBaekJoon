function solution(my_string) {
  let answer = 0;
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i].charCodeAt() >= 48 && my_string[i].charCodeAt() <= 57) {
      answer += Number(my_string[i]);
    }
  }
  return answer;
}
