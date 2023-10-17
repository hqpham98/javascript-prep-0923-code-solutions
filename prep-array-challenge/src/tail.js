function tail(arr) {
  if (arr.length>1) {
    let result = [];
    let i = 1;
    while (i<arr.length) {
      result[i-1]=arr[i];
      i++;
    }
    return result;
  }
  return [];
}
