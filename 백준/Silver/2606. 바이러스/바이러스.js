const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, m, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

n = parseInt(n);
m = parseInt(m);
arr = arr.map((data) => data.split(" ").map(Number));

const solution = (n, m, arr) => {
  const map = Array.from(Array(n + 1), () => []);

  // 등록 배열
  const visited = Array(n + 1).fill(false);

  // 자기자신은 true로 설정
  visited[1] = true;

  for (let i = 0; i < m; i++) {
    const [a, b] = arr[i];
    map[a].push(b);
    map[b].push(a);
  }

  const DFS = (num) => {
    // 방문하지 않았다면
    map[num].forEach((element) => {
      if (!visited[element]) {
        // 방문처리
        visited[element] = true;
        DFS(element);
      }
    });
  };

  DFS(1);

  return visited.filter((data) => data).length - 1;
};

console.log(solution(n, m, arr));
