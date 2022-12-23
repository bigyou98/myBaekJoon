const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, m] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function get_primes(n, m) {
  const prime = [false, false, ...Array(m + 1).fill(true)];

  for (let i = 2; i * i <= m; i++) {
    if (prime[i]) {
      for (let j = i * 2; j <= m; j += i) {
        prime[j] = false;
      }
    }
  }
  return prime
    .map((v, i) => {
      if (v) {
        return i;
      }
    })
    .slice(n, m+1)
    .filter(Number);
}

get_primes(n, m).forEach((data) => {
  console.log(data);
});
