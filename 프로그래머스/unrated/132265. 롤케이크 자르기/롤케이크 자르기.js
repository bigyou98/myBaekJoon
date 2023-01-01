function solution(topping) {
  let answer = 0;
  let me = new Map();
  let brother = new Map();

  // 초기화
  for (let i = 0; i < topping.length; i++) {
    let data = topping[i];
    if (brother.has(data)) {
      brother.set(data, brother.get(data) + 1);
    } else {
      brother.set(data, 1);
    }
  }
  for (let i = 0; i < topping.length; i++) {
    let data = topping[i];
    // me한테는 추가해주기
    if (!me.has(data)) {
      me.set(data, 1);
    }

    // brother한테는 제거해주기
    if (brother.has(data)) {
      if (brother.get(data) === 1) {
        brother.delete(data);
      } else {
        brother.set(data, brother.get(data) - 1);
      }
    }

    if (brother.size === me.size) {
      answer++;
    } else if (brother.size < me.size) {
      break;
    }
  }

  return answer;
}