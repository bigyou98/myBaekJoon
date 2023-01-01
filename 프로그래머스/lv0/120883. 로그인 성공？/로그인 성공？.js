function solution(id_pw = [], db = []) {
  const [myId, myPW] = id_pw;
  for (const [userId, userPw] of db) {
    if (userId === myId && userPw === myPW) {
      return "login";
    } else if (userId === myId && userPw !== myPW) {
      return "wrong pw";
    }
  }
  return "fail";
}