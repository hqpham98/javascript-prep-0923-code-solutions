function compact(arr) {
  const result = [];
  let i = 0;
  while (i<arr.length) {
    if (arr[i]) {
      result.push(arr[i]);
    }
    i++;
  }
  return result;
}
