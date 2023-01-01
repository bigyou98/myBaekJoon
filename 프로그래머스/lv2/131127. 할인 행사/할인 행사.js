function solution(want, number, discount) {
  let answer = 0;

  for (let i = 0; i < discount.length - 9; i++) {
    let temp = discount.slice(i, i + 10).join("");
    for (let j = 0; j < want.length; j++) {
      if (!temp.includes(want[j])) {
        break;
      }
      for (let _ = 0; _ < number[j]; _++) {
        temp = temp.replace(want[j], "");
      }
      if (temp === "") {
        answer++;
        break;
      }
    }
  }
  return answer;
}
