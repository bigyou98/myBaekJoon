/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let answer;
  let standard = Number.MAX_VALUE;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];

        // 가까운 값을 찾아야해서 abs 사용해야함.
        const currentGap = Math.abs(target - sum);

        if (currentGap < standard) {
          standard = currentGap;
          answer = sum;
        }
      }
    }
  }
  return answer;
};