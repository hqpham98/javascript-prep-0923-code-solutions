function initial(arr) {
  if (arr.length<2){
    return arr;
  }
  let i = 0;
  let result = [];
  while (i<arr.length-1) {
    result[i]=arr[i];
    i++;
  }
  return result;
}
