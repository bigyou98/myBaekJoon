function solution(clothes = []) {
  let map = new Map();

  clothes.forEach(([name, category]) => {
    if (map.has(category)) {
      map.get(category).push(name);
      map.get(category)[0]++;
    } else {
      map.set(category, [1, name]);
    }
  });

  let temp = [];
  map.forEach(([count]) => {
    temp.push(count);
  });

  return temp.reduce((cur, acc) => cur * (acc + 1), 1) - 1;
}