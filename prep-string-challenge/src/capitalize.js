function capitalize(word) {
  if (word.length<2) {
    return word.toUpperCase();
  }

  const temp = word.charAt(0).toUpperCase();
  return temp+word.slice(1).toLowerCase();
}
