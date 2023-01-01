function solution(s) {
  const arr = s.split(" ");
  const answer = [];
  arr.forEach((item) => {
    if (item === "Z") {
      answer.pop();
    } else {
      answer.push(Number(item));
    }
  });
  return answer.reduce((acc, cur) => cur + acc, 0);
}
