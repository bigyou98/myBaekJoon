let solution = (n) => {
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  // 제곱근으로 비교해서 효율을 높임
  for (let i = 2; i * i <= n; i++) {
    // true만 반복문 돌림
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  // true인것으로 필터링
  return arr.filter((e) => e).length;
};