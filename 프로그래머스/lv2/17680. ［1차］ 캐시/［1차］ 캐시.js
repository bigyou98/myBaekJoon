function solution(cacheSize, cities) {
  let answer = 0;
  const cache = [];
  cities.forEach((city) => {
    let item = city.toLowerCase();
    if (cache.includes(item)) {
      answer += 1;
      cache.splice(cache.indexOf(item), 1);
      cache.push(item);
    } else {
      answer += 5;
      cache.push(item);
      if (cache.length > cacheSize) {
        cache.shift();
      }
    }
  });
  return answer;
}