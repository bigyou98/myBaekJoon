function solution(wallpaper) {
  let minX = Number.MAX_SAFE_INTEGER;
  let minY = Number.MAX_SAFE_INTEGER;
  let maxX = 0;
  let maxY = 0;
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[0].length; j++) {
      if (wallpaper[i][j] === "#") {
        minX = Math.min(minX, i);
        minY = Math.min(minY, j);
        maxX = Math.max(maxX, i + 1);
        maxY = Math.max(maxY, j + 1);
      }
    }
  }
  return [minX, minY, maxX, maxY];
}
