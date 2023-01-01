// 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
// 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
// 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
// // 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.

// 순서대로 누를 번호가 담긴 배열 numbers,
// 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand
// 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수
// [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	"right"	"LRLLLRLLRRL"
const solution = (numbers = [], hand) => {
  const distance = (a, b) => {
    return Math.abs(b.x - a.x) + Math.abs(b.y - a.y);
  };
  let answer = "";

  // 2 : [1][0]
  // 5 : [1][1]
  // 8 : [1][2]
  // 0 : [1][3]
  let L의현재위치 = { x: 0, y: 3 };
  let R의현재위치 = { x: 2, y: 3 };
  let 좌표 = { x: 0, y: 0 };
  let LDistance = 0;
  let RDistance = 0;

  numbers.forEach((number) => {
    switch (number) {
      case 1:
        answer += "L";
        L의현재위치.x = 0;
        L의현재위치.y = 0;
        break;
      case 4:
        answer += "L";
        L의현재위치.x = 0;
        L의현재위치.y = 1;
        break;
      case 7:
        answer += "L";
        L의현재위치.x = 0;
        L의현재위치.y = 2;
        break;
      case 3:
        answer += "R";
        R의현재위치.x = 2;
        R의현재위치.y = 0;
        break;
      case 6:
        answer += "R";
        R의현재위치.x = 2;
        R의현재위치.y = 1;
        break;
      case 9:
        answer += "R";
        R의현재위치.x = 2;
        R의현재위치.y = 2;
        break;
      case 2:
        좌표.x = 1;
        좌표.y = 0;

        LDistance = distance(L의현재위치, 좌표);
        RDistance = distance(R의현재위치, 좌표);
        // 가운데 경우
        if (LDistance > RDistance) {
          answer += "R";
          R의현재위치.x = 좌표.x;
          R의현재위치.y = 좌표.y;
        } else if (LDistance < RDistance) {
          answer += "L";
          L의현재위치.x = 좌표.x;
          L의현재위치.y = 좌표.y;
        } else if (LDistance === RDistance) {
          if (hand === "left") {
            answer += "L";
            L의현재위치.x = 좌표.x;
            L의현재위치.y = 좌표.y;
          } else {
            answer += "R";
            R의현재위치.x = 좌표.x;
            R의현재위치.y = 좌표.y;
          }
        }
        break;
      case 5:
        좌표.x = 1;
        좌표.y = 1;
        LDistance = distance(L의현재위치, 좌표);
        RDistance = distance(R의현재위치, 좌표);
        // 가운데 경우
        if (LDistance > RDistance) {
          answer += "R";
          R의현재위치.x = 좌표.x;
          R의현재위치.y = 좌표.y;
        } else if (LDistance < RDistance) {
          answer += "L";
          L의현재위치.x = 좌표.x;
          L의현재위치.y = 좌표.y;
        } else if (LDistance === RDistance) {
          if (hand === "left") {
            answer += "L";
            L의현재위치.x = 좌표.x;
            L의현재위치.y = 좌표.y;
          } else {
            answer += "R";
            R의현재위치.x = 좌표.x;
            R의현재위치.y = 좌표.y;
          }
        }
        break;
      case 8:
        좌표.x = 1;
        좌표.y = 2;
        LDistance = distance(L의현재위치, 좌표);
        RDistance = distance(R의현재위치, 좌표);
        // 가운데 경우
        if (LDistance > RDistance) {
          answer += "R";
          R의현재위치.x = 좌표.x;
          R의현재위치.y = 좌표.y;
        } else if (LDistance < RDistance) {
          answer += "L";
          L의현재위치.x = 좌표.x;
          L의현재위치.y = 좌표.y;
        } else if (LDistance === RDistance) {
          if (hand === "left") {
            answer += "L";
            L의현재위치.x = 좌표.x;
            L의현재위치.y = 좌표.y;
          } else {
            answer += "R";
            R의현재위치.x = 좌표.x;
            R의현재위치.y = 좌표.y;
          }
        }
        break;
      case 0:
        좌표.x = 1;
        좌표.y = 3;
        LDistance = distance(L의현재위치, 좌표);
        RDistance = distance(R의현재위치, 좌표);
        // 가운데 경우
        if (LDistance > RDistance) {
          answer += "R";
          R의현재위치.x = 좌표.x;
          R의현재위치.y = 좌표.y;
        } else if (LDistance < RDistance) {
          answer += "L";
          L의현재위치.x = 좌표.x;
          L의현재위치.y = 좌표.y;
        } else if (LDistance === RDistance) {
          if (hand === "left") {
            answer += "L";
            L의현재위치.x = 좌표.x;
            L의현재위치.y = 좌표.y;
          } else {
            answer += "R";
            R의현재위치.x = 좌표.x;
            R의현재위치.y = 좌표.y;
          }
        }
        break;
    }
  });

  return answer;
};
console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")); //"LRLLLRLLRRL"