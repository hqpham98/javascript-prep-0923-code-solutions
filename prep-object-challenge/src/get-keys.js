function getKeys(object) {
  const result = [];
  for (const prop in object) {
    result.push(prop);
  }
  return result;
}
