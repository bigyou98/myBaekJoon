const solution = (lottos = [], win_nums = []) => {
  let zeroCnt = 0;
  lottos.forEach((lotto) => {
    if (lotto === 0) {
      zeroCnt++;
    }
  });
  
  lottos = lottos.filter((lotto) => {
    return win_nums.includes(lotto);
  });
  return [swit(lottos.length + zeroCnt), swit(lottos.length)];
};

const swit = (counts) => {
  switch (counts) {
    case 6:
      return 1;
    case 5:
      return 2;
    case 4:
      return 3;
    case 3:
      return 4;
    case 2:
      return 5;
    default:
      return 6;
  }
};