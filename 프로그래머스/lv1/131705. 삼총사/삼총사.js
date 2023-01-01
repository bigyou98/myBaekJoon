function solution(number = []) {
  let answer = 0;
  const temp = [];
  for (let i = 0; i < number.length; i++) {
    let pivot = number[i];
    for (let j = i + 1; j < number.length; j++) {
      let pivot2 = number[j];
      let count = number.slice(j + 1).filter((item) => {
        return item === (pivot + pivot2) * -1;
      }).length;
      if (count > 0) {
        answer += count;
        temp.push([number[i], number[j], (pivot + pivot2) * -1]);
      }
    }
  }
  return answer;
}