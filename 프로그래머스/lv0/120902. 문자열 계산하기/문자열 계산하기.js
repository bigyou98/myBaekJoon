function solution(my_string = "") {
  const arr = my_string.split(" ");

  let answer = Number(arr[0]);
  for (let i = 1; i < arr.length; i += 2) {
    let symbol = arr[i];
    let num = Number(arr[i + 1]);
    if (symbol === "+") {
      answer += num;
    } else if (symbol === "-") {
      answer -= num;
    }
  }
  return answer;
}