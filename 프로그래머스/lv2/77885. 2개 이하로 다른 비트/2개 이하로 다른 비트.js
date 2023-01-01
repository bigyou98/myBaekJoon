function solution(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number % 2 === 0) {
      answer.push(number + 1);
    } else {
      let number_binary = "0" + number.toString(2);
      let temp = [...number_binary].reverse().indexOf("0");
      const qwe = [...number_binary];
      qwe[number_binary.length - 1 - temp] = "1";
      qwe[number_binary.length - 1 - temp + 1] = "0";
      answer.push(parseInt(qwe.join(""), 2));
    }
  }
  return answer;
}