const age = 25;

function isAdult(age) {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}

console.log('isAdult Result:', isAdult(age));

const student1Score = 50;

function didStudentPass(score) {
  if (score >= 70) {
    return true;
  } else {
    return false;
  }
}

console.log('didStudentPass Result:', didStudentPass(student1Score));

const student2Score = 80;

function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else {
    return 'A++';
  }
}
console.log('gradeCalculator Result:', gradeCalculator(student2Score));

const season = 'summer';

function seasonMessenger(season) {
  if (season === 'summer') {
    return "it's hot today";
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return "it's cold today";
  }
}

console.log('seasonMessenger Result:', seasonMessenger(season));

const dayOfTheWeek = 'thursday';

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'have a good weekend!';
  } else {
    return "It's a weekday!";
  }
}

console.log('dayDetector Result:', dayDetector(dayOfTheWeek));
