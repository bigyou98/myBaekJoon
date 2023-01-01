// 2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.
const solution = (arr1 = [], arr2 = []) => {
  let answer = [];
  arr1.forEach((v) => answer.push(Array(arr2[0].length).fill(0)));

  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2[0].length; j++) {
      for (var k = 0; k < arr2.length; k++) {
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return answer;
};

// 행렬의 곱셈 자체를 문제를 푸는 방식을 모르겠는 문제였다.
console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [[3, 3], [3, 3]]
  )
); // [[15, 15], [15, 15], [15, 15]]