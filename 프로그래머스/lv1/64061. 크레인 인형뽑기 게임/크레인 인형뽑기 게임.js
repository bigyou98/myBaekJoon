const solution = (board = [], moves = []) => {
  let cnt = 0;
  let tempArr = [];
  // 꺼내오기
  moves.forEach((move) => {
    for (let bod of board) {
      if (bod[move - 1] !== 0) {
        if (tempArr[tempArr.length - 1] === bod[move - 1]) {
          tempArr.pop();
          cnt += 2;
          bod[move - 1] = 0;
          break;
        }
        tempArr.push(bod[move - 1]);
        bod[move - 1] = 0;
        break;
      }
    }
  });
  return cnt;
};