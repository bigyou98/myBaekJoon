const solution = (str_list, n) => {
  str_list.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    else if (a[n] < b[n]) return -1;
    else {
      if (a > b) return 1;
      else if (a < b) return -1;
      else return 0;
    }
  });
  return str_list;
};