function solution(array) {
  const map = {};
  array.forEach((num) => {
    if (map[num]) {
      map[num]++;
    } else {
      map[num] = 1;
    }
  });

  const max = Math.max(...Object.values(map));

  const answer = [];
  for (const key in map) {
    if (map[key] === max) {
      answer.push(key);
    }
  }

  return answer.length === 1 ? Number(answer[0]) : -1;
}