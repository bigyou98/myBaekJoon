function solution(number, limit, power) {
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
  let answer = 0;
  const arr = Array.from(Array(number), (_, i) => {
    return i + 1;
  }).map((num) => {
    let temp = getDivisors(num).length;
    return temp > limit ? power : temp;
  });

  return arr.reduce((acc, cur) => acc + cur, 0);
}