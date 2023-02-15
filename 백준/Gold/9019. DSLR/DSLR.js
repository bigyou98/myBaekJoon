const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...map] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = +n;

map = map.map((data) => data.split(" ").map(Number));

const solution = (start, end) => {
  // 방문 배열 생성
  const visited = Array(10000).fill(false);
  const commands = Array(10000).fill("");
  const queue = [{ number: start, command: "" }];
  visited[start] = true;
  while (queue.length && !visited[end]) {
    const { number: current_number, command: current_command } = queue.shift();
    let nextNumber = current_number;

    for (let i = 0; i < 4; i++) {
      switch (i) {
        // D
        case 0:
          nextNumber = current_number * 2;
          if (nextNumber >= 10000) {
            nextNumber %= 10000;
          }
          if (!visited[nextNumber]) {
            visited[nextNumber] = true;
            commands[nextNumber] = current_command + "D";
            queue.push({ number: nextNumber, command: current_command + "D" });
          }
          break;
        // S
        case 1:
          nextNumber = current_number - 1;
          if (nextNumber < 0) {
            nextNumber = 9999;
          }
          if (!visited[nextNumber]) {
            visited[nextNumber] = true;
            commands[nextNumber] = current_command + "S";
            queue.push({ number: nextNumber, command: current_command + "S" });
          }
          break;
        // L
        case 2:
          // 왼쪽으로 이동시켜주기
          const current_number_copy1 = current_number
            .toString()
            .padStart(4, "0");
          let temp1 = "";
          for (let i = 1; i < 4; i++) {
            temp1 += `${current_number_copy1[i]}`;
          }
          temp1 += current_number_copy1[0];
          nextNumber = Number(temp1);
          if (!visited[nextNumber]) {
            visited[nextNumber] = true;
            commands[nextNumber] = current_command + "L";
            queue.push({ number: nextNumber, command: current_command + "L" });
          }
          break;
        // R
        case 3:
          const current_number_copy2 = current_number
            .toString()
            .padStart(4, "0");
          let temp2 = `${current_number_copy2[3]}`;
          for (let i = 0; i < 3; i++) {
            temp2 += `${current_number_copy2[i]}`;
          }
          nextNumber = Number(temp2);
          if (!visited[nextNumber]) {
            visited[nextNumber] = true;
            commands[nextNumber] = current_command + "R";
            queue.push({ number: nextNumber, command: current_command + "R" });
          }
          break;
        default:
          break;
      }
    }
  }
  return commands[end];
};

let answer = "";
for (let i = 0; i < n; i++) {
  const [a, b] = map[i];
  answer += `${solution(a, b)}\n`;
}
console.log(answer);
