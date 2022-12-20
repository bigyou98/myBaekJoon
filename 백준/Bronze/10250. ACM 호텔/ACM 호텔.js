const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
n = parseInt(n);
arr = arr.map((data) => data.split(" ").map(Number));

for (let i = 0; i < n; i++) {
  const [h, w, n] = arr[i];
  let r = (n % h).toString();
  let q = Math.ceil(n / h).toString();
  if (r === "0") {
    r = h + "";
  }
  if (q.length === 1) {
    q = "0" + q;
  }
  console.log(r + q);
}
