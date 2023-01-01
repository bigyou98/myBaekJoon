function solution(my_string) {
  const isNum = (str) => {
    return Number.isInteger(Number(str));
  };
  let answer = 0;
  let end = 0;
  let tempNum = "";
  while (end <= my_string.length) {
    let currentStr = my_string[end];
    if (isNum(currentStr)) {
      tempNum += currentStr;
      end++;
    } else {
      end++;
      answer += Number(tempNum);
      tempNum = "0";
    }
  }

  return answer;
}