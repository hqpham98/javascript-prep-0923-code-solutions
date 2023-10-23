function getValues(object) {
  const result = [];
  for (const prop in object) {
    result.push(object[prop]);
  };
  return result;
}
