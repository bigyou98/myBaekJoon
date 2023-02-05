const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = +n;
let answer = "";
for (let i = 0; i < n; i++) {
  let commands = input.shift().replaceAll("RR", "");
  commands = commands.split("");
  let d_count = 0;
  commands.forEach((c) => {
    if (c === "D") {
      d_count++;
    }
  });
  let n = +input.shift();

  const arr = input
    .shift()
    .replace("[", "")
    .replace("]", "")
    .split(",")
    .map(Number);

  // 삭제가 더 많은 경우
  if (n < d_count) {
    answer += "error\n";
    continue;
  }

  // 커맨드대로 지우기
  let start = 0;
  let end = arr.length - 1;
  let r_toggle = false;
  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];
    if (command === "D") {
      if (n === 0) {
        answer += "error\n";
      }
      // 그자리는 false로 바꾸고 1칸 이동
      arr[start] = false;
      if (r_toggle) {
        start--;
      } else {
        start++;
      }
      n--;
    } else if (command === "R") {
      // 위치 변경
      [start, end] = [end, start];
      r_toggle = !r_toggle;
    }
  }
  const filtered = arr.filter((data) => {
    return data;
  });
  if (n === 0) {
    answer += "[]\n";
  } else if (r_toggle) {
    answer += "[";
    for (let i = start; i >= end; i--) {
      answer += `${arr[i]},`;
    }
    answer = answer.slice(0, -1) + "]\n";
  } else {
    answer += `[${filtered.join(",")}]\n`;
  }
}

console.log(answer);
