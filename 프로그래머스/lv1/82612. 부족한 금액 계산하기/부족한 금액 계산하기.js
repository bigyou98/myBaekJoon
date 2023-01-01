const solution = (price, myMoney, count) => {
  let sum = 0;
  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }
  if (sum > myMoney) {
    return sum - myMoney;
  } else {
    return 0;
  }
};