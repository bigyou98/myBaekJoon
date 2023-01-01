const solution = (arr, divisor) => {
  let temp = arr
    .filter((item) => item % divisor === 0)
    .sort((a, b) => {
      return a - b;
    });

  return temp.length === 0 ? [-1] : temp;
};