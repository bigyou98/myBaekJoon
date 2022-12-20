const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((data) => {
    return data.split(" ").map(Number);
  });

for (let i = 0; i < input.length - 1; i++) {
  const [a, b, c] = input[i].sort((a, b) => b - a);

  if (a ** 2 === b ** 2 + c ** 2) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
