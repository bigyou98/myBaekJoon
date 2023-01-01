function solution(my_string) {
  const answer = [...my_string.toLowerCase()].sort(
    (a, b) => a.charCodeAt() - b.charCodeAt()
  );

  return answer.join("");
}
