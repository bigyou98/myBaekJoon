function solution(ingredient) {
  const temp = [];
  let answer = 0;
  let length = ingredient.length;
  for (let i = 0; i < length; i++) {
    temp.push(ingredient[i]);
    let TL = temp.length;
    if (
      temp[TL - 1] === 1 &&
      temp[TL - 2] === 3 &&
      temp[TL - 3] === 2 &&
      temp[TL - 4] === 1
    ) {
      answer++;
      temp.pop();
      temp.pop();
      temp.pop();
      temp.pop();
    }
  }
  return answer;
}