function solution(brown, yellow) {
  const sum = brown + yellow;

  // 2부터 시작하는 이유 : 갈색이 위아래로 있기때문에 y는 3부터 시작해야함
  for (let i = 3; i <= Math.floor(sum / 2); i++) {
    // 나머지가 있는 경우는 나감
    if (sum % i !== 0) {
      continue;
    }
    const x = sum / i;
    const y = i;

    // 테두리를 제외한 모든 값이 yellow이기 때문에
    // 가로와 세로를 2칸씩 줄인 값을 곱하면 yellow가 된다.
    if ((x - 2) * (y - 2) === yellow) {
      return [x, y];
    }
  }
}