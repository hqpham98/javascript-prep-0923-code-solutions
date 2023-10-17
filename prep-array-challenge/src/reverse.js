function reverse(arr) {
  if (arr.length<2) {
    return arr;
  }

  let i = arr.length-1;
  let result = [];

  while (i>=0){
    result[arr.length-1-i]=arr[i];
    i--;
  }
  return result;
}
