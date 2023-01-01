const solution = (arr) => {
  let sum = 0;
  arr.map((i) => (sum += i));
  return sum / arr.length;
};