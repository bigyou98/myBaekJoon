const solution = (absolutes = [], signs = []) => {
  let sum = 0;
  signs.forEach((sign, i) => {
    if (sign === true) {
      sum += absolutes[i];
    } else if (sign === false) {
      sum -= absolutes[i];
    }
  });
  return sum;
};