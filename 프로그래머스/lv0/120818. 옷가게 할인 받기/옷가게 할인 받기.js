function solution(price) {
  let num = Number(price);

  if (num >= 100000 && num < 300000) {
    num = num - (num / 100) * 5;
  } else if (num >= 300000 && num < 500000) {
    num = num - (num / 100) * 10;
  } else if (num >= 500000) {
    num = num - (num / 100) * 20;
  }

  return Math.floor(num);
}
