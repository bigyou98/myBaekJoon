const solution = (n, lost = [], reserve = []) => {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  let temp = [...lost];
  lost = lost.filter((i) => !reserve.includes(i));
  reserve = reserve.filter((i) => !temp.includes(i));
  let answer = n - lost.length;

  lost.forEach((잃어버린애) => {
    if (reserve.includes(잃어버린애 - 1)) {
      reserve.splice(reserve.indexOf(잃어버린애 - 1), 1);
      answer++;
    } else if (reserve.includes(잃어버린애 + 1)) {
      reserve.splice(reserve.indexOf(잃어버린애 + 1), 1);
      answer++;
    }
  });
  return answer;
};