function solution(n, k) {
  const changeN = n.toString(k);
  const changeNArr = changeN.split("0");

  function is_prime(num) {
    if (num === 0 || num === 1) {
      return false;
    }

    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  let answer = 0;

  changeNArr
    .filter((item) => item !== "")
    .forEach((item) => {
      if (is_prime(parseInt(item))) {
        answer++;
      }
    });
  return answer;
}