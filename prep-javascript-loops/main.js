function whileLoop1() {
  const testArray = [];
  let i = 0;

  while (i < 10) {
    testArray.push(i);
    i++;
  }
  return testArray;
}

console.log('whileLoop1 Output:', whileLoop1());

function whileLoop2() {
  const testArray = [];
  let i = 0;

  while (i < 19) {
    testArray.push(i);
    i += 2;
  }

  return testArray;
}

console.log('whileLoop2 Output:', whileLoop2());

function forLoop1() {
  const testArray = [];
  for (let i = 0; i < 10; i++) {
    testArray.push(i);
  }
  return testArray;
}

console.log('forLoop1 Output:', forLoop1());

function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log('Time till explosion', i + '!');
  }
}

forLoop2();

function forInLoop1(object) {
  const testArray = [];
  for (const i in object) {
    testArray.push(i);
  }
  return testArray;
}

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

console.log('forInLoop1 Output:', forInLoop1(object));

function forInLoop2(object) {
  const testArray = [];
  for (const i in object) {
    testArray.push(object[i]);
  }
  return testArray;
}

console.log('forInLoop2 Output:', forInLoop2(object));
