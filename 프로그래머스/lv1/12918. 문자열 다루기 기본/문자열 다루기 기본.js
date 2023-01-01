const solution = (str) => {
  if (str.length === 4 || str.length === 6) {
    if (str.includes("e")) {
      return false;
    }
    return isNaN(Math.round(str)) ? false : true;
  } else {
    return false;
  }
};