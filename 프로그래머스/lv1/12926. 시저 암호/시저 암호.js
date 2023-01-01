const solution = (str, n) => {
  result = "";
  for (let i = 0; i < str.length; i++) {
    // 해당 아스키코드
    let org = str.charCodeAt(i);

    // 공백문자일때
    if (org === 32) {
      result += " ";
      continue;
    }
    // 대문자 범위일때
    else if (org >= 65 && org <= 90) {
      // z 를 넘어가는 경우
      if (org + n > 90) {
        // b에 25를 더하면 a
        org = org + n - 26;
      } else {
        org = org + n;
      }
    }
    // 소문자 일 때
    else if (org >= 97 && org <= 122) {
      if (org + n > 122) {
        org = org + n - 26;
      } else {
        org = org + n;
      }
    }
    result += String.fromCharCode(org);
  }
  return result;
};