function solution(id_list, report, k) {
  let answer = new Array(id_list.length).fill(0);

  let reportArr = [...new Set(report)].map((item) => item.split(" "));

  let report_list = {};

  id_list.forEach((id) => {
    report_list[id] = [];
  });

  // 나쁜놈 : [신고자 명단]
  reportArr.forEach((arr) => {
    const [a, b] = arr;

    report_list[b].push(a);
  });

  for (let badGuy in report_list) {
    if (report_list[badGuy].length >= k) {
      report_list[badGuy].forEach((person) => {
        answer[id_list.indexOf(person)] += 1;
      });
    }
  }

  return answer;
}