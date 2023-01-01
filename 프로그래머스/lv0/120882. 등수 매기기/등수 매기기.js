function solution(score = []) {
  const map = score.map((item) => {
    return (item[0] + item[1]) / 2;
  });

  const answer = [];
 

  for (let i = 0; i < map.length; i++) {
    let rank = 1;
    for (const item of map) {
      if (map[i] < item) {
        rank++;
      }
    }
    answer.push(rank);
  }

  return answer;
}