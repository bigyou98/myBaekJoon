function solution(sides = []) {
  let answer = 0;
  let max = Math.max(...sides);
  let min = Math.min(...sides);
  let y = max;
  // 이미 있던 것들 중에서
  while (max < min + y && y <= max) {
    answer++;
    y--;
  }
  // 나머지 한변이 큰경우
  y = max + 1;
  while (max < y + y && min + max > y) {
    answer++;
    y++;
  }

  return answer;
}
