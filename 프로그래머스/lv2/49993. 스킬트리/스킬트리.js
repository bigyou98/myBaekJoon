function solution(skill, skill_trees) {
  let answer = 0;
  for (const user_skills of skill_trees) {
    const check = [...user_skills]
      .filter((s) => skill.includes(s))
      .map((s) => skill.indexOf(s));

    if (equal(check)) {
      answer++;
    }
  }
  function equal(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== i) {
        return false;
      }
    }
    return true;
  }
  return answer;
}
