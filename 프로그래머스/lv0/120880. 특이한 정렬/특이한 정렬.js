function solution(numlist = [], n) {
  function answer(a, b) {
    let aGap = Math.abs(n - a);
    let bGap = Math.abs(n - b);

    if (bGap === aGap) {
      return b - a;
    }
    return aGap - bGap;
  }

  return numlist.sort(answer);
}
