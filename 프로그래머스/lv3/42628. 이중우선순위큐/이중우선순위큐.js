function solution(operations = []) {
  const arr = [];

  for (const oper of operations) {
    switches(oper);
  }

  function switches(value) {
    if (value[0] === "I") {
      // 값 삽입
      let result = value.replace(/[I]/g, "").trim();
      arr.push(Number(result));
      arr.sort((a, b) => b - a);
    } else if (value === "D 1") {
      arr.shift();
    } else if (value === "D -1") {
      arr.pop();
    } else {
      console.log("알수 없는 값입니다.");
    }
  }
  if (arr.length === 0) {
    return [0, 0];
  } else if (arr.length === 0) {
    return [arr[0]];
  } else {
    return [arr[0], arr[arr.length - 1]];
  }
}