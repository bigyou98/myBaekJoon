/**
 * @param {number[]} height
 * @return {number}
 */
//  10**5니까 최대 nlogn
var maxArea = function (height) {
  // 처음과 끝을 변수로 생성
  // result값은 따로 두기.
  let result = 0;
  let left = 0;
  let right = height.length -1;

  while (left <= right) {
    if (right === height.length) break;

    // 면적 구하기
    const x = right - left;
    const y = Math.min(height[left], height[right]);
    
    const area = x * y;

    result = Math.max(result, area);

    if(height[left] > height[right]){
        right--;
    }else{
        // 같아도 left가 이동하여 탈출할수 있도록 else로 설정함
        left++;
    }
  }

  return result;
};