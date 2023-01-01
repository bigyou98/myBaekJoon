function solution(numbers) {
  numbers.sort((a, b) => Number(b) - Number(a));
  let pp = numbers[0] * numbers[1];
  let mm = numbers[numbers.length - 1] * numbers[numbers.length - 2];

  return pp > mm ? pp : mm;
}
