function solution(numbers, direction) {
  if (direction === "right") {
    return numbers.map((_, i) => {
      if (i === 0) {
        return numbers[numbers.length - 1];
      } else {
        return numbers[i - 1];
      }
    });
  } else if (direction === "left") {
    return numbers.map((_, i) => {
      if (i !== numbers.length - 1) {
        return numbers[i + 1];
      } else {
        return numbers[0];
      }
    });
  }
}
