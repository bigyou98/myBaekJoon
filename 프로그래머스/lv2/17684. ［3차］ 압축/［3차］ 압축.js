const solution = (msg) => {
  let dict = [
    "0",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let answer = [];

  const find = (dict, msg) => {
    let tempMsg = msg[0];
    let i = 1;
    while (true) {
      if (dict.includes(tempMsg)) {
        if (typeof msg[i] === "undefined") {
          break;
        }
        tempMsg += msg[i];
        i++;
      } else {
        dict.push(tempMsg);
        tempMsg = tempMsg.slice(0, -1);
        break;
      }
    }
    return tempMsg;
  };

  while (msg !== "") {
    // find(dict, msg)로 찾은거 msg에서 제거하고
    // 해당 문자열 dict에서 번호 찾아서 answer에 push
    let temp = find(dict, msg);
    msg = msg.slice(temp.length, msg.length);
    answer.push(dict.indexOf(temp));
  }

  return answer;
};