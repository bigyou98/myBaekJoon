/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  const sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length - 2; i++) {
    // i 중복 건너뛰기
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

    let left = i + 1;
    let right = sortedNums.length - 1;

    while (left < right) {
      const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];

      if (sum === 0) {
        result.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
        // 핵심 부분 : 중복을 건너뛰기 위해서 필요함.
        left++;
        right--;

        // left 중복 건너뛰기
        while (left < right && sortedNums[left] === sortedNums[left - 1]) left++;
        // right 중복 건너뛰기
        while (left < right && sortedNums[right] === sortedNums[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};