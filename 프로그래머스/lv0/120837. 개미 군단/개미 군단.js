function solution(hp) {
  const ants = [5, 3, 1];
  let answer = 0;
  ants.forEach((ant) => {
    answer += Number.parseInt(hp / ant);
    hp = hp % ant;
  });
  return answer;
}
