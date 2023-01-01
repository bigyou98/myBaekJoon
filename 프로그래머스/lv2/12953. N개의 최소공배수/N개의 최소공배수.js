function gcd(a, b) {
  if (a === 0) return b;
  return gcd(b % a, a);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  let result = 1;

  for (let i = 0; i < arr.length; i++) {
    result = lcm(result, arr[i]);
  }
  return result;
}

console.log(solution([2, 6, 8, 14])); // 168