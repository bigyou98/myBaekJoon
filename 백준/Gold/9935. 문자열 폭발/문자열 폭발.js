const filePath = process.platform === 'linux' ? '/dev/stdin' : '예제.txt';
let [str, target] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((data) => data.trim());

const stack = [];
const check = () => {
  // 다르면 false
  for (let i = 0; i < target.length; i++) {
    if (stack[stack.length - 1 - i] !== target[target.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

for (let i = 0; i < str.length; i++) {
  const current = str[i];
  stack.push(current);
  if (current === target[target.length - 1]) {
    if (check()) {
      for (let j = 0; j < target.length; j++) {
        stack.pop();
      }
    }
  }
}

console.log(stack.length === 0 ? 'FRULA' : stack.join(''));
