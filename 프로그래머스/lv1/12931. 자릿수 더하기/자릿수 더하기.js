const solution = (n) => {
  let sum = 0;
  String(n)
    .split("")
    .map((i) => (sum += Number(i)));
  return sum;
};