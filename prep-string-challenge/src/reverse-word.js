function reverseWord(word) {
  if (!word){
    return word;
  }

  let temp = "";
  for (let i = word.length-1; i>=0; i--){
    temp += word.charAt(i);
  }
  return temp;
}
