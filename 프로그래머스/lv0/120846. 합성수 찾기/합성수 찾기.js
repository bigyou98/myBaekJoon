function solution(n) {
  let answer = 0;

  const getDivisors = (num) => {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        divisors.push(i);
        if (num / i != i) divisors.push(num / i);
      }
    }

    divisors.sort((a, b) => a - b);
    return divisors;
  };
  for (let i = 4; i <= n; i++) {
    if (getDivisors(i).length >= 3) {
      answer++;
    }
  }
  return answer;
}