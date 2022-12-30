function solution(t = "", p = "") {
  const length = p.length;
  const standard = parseInt(p);
  let answer = 0;
  for (let i = 0; i <= t.length - length; i++) {
    let temp = parseInt(t.slice(i, i + length));
    if (standard >= temp) {
      answer++;
    }
  }
  return answer;
}