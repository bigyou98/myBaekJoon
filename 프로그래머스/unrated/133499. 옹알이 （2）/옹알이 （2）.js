function solution(babbling) {
  const standard = ["aya", "ye", "woo", "ma"];
  const standard_2 = ["ayaaya", "yeye", "woowoo", "mama"];
  let answer = 0;
  for (let i = 0; i < babbling.length; i++) {
    if (
      babbling[i].includes(standard_2[0]) ||
      babbling[i].includes(standard_2[1]) ||
      babbling[i].includes(standard_2[2]) ||
      babbling[i].includes(standard_2[3])
    ) {
      continue;
    }

    for (const str of standard) {
      babbling[i] = babbling[i].replaceAll(str, "_");
      if ([...babbling[i]].every((item) => item.charCodeAt() === 95)) {
        answer++;
        break;
      }
    }
  }
  return answer;
}