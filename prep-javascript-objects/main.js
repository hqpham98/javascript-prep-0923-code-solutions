const person = {
  firstName: 'Henry',
  lastName: 'Pham',
  hobby: 'Gaming',
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName);

person.job = 'Software Test Engineer';
console.log("The person's current job is " + person.job);

person['previousJob'] = 'Unemployed';
console.log("The person's previous job is: " + person['previousJob']);

console.log('The complete person object:', person);
