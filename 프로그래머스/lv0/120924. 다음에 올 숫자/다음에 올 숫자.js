function solution(common) {
  let a = common[0];
  let b = common[1];
  let c = common[2];
  if (c - b === b - a) {
    return common[common.length - 1] + b - a;
  } else {
    return common[common.length - 1] * (b / a);
  }
}