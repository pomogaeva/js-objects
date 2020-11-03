// Task 1 - car obj
let car = {
  manufacturer: 'BMW',
  model: 'X5',
  year: '2007',
  speedAverage: 90
}

function showCarInfo(obj) {
  for (let key in obj) {
    alert(`${key}: ${obj[key]}`)
  }
}

showCarInfo(car);

let distance = +prompt('What is the distance?');

function calcTimeInRoad(dist) {
  let time = dist / car.speedAverage;
  let rest = 0;

  for (let hours = 0; hours <= time; hours++) {
    if (hours % 5 == 0) {
      rest++;
      time++;
    }
  }

  alert(`You need ${time.toFixed(1)} hours`);
}

calcTimeInRoad(distance);


// Task 2 - fraction obj
class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }
}

let numOne = +prompt('Enter first numerator');
let denomOne = +prompt('Enter first denominator');
let numTwo = +prompt('Enter second numerator');
let denomTwo = +prompt('Enter second denominator');
let fractionOne = new Fraction(numOne, denomOne);
let fractionTwo = new Fraction(numTwo, denomTwo);

function calcSum(obj1, obj2) {
  let sumResult = ((obj1.numerator * obj2.denominator + obj2.numerator * obj1.denominator) / (obj1.denominator * obj2.denominator));
  return alert(`Sum is ${sumResult}`);
}

function calcSub(obj1, obj2) {
  let subResult = ((obj1.numerator * obj2.denominator - obj2.numerator * obj1.denominator) / (obj1.denominator * obj2.denominator));
  return alert(`Substraction is ${subResult}`);
}

function calcMul(obj1, obj2) {
  let mulResult = (obj1.numerator * obj2.numerator) / (obj1.numerator * obj2.denominator);
  return alert(`Multiplication is ${mulResult}`);
}

function calcDiv(obj1, obj2) {
  let divResult = (obj1.numerator * obj2.denominator) / (obj1.numerator * obj1.denominator);
  return alert(`Division is ${divResult}`);
}

function reductFraction(obj) {
  let reductNumerator = obj.numerator / getGcd(obj);
  let reductDenominator = obj.denominator / getGcd(obj);

  function getGcd(obj) {
    let n = obj.numerator;
    let m = obj.denominator;
    let gcd = n;

    while (n != m) {
      if (n < m) {
        m = m - n;
        gcd = m;
      } else {
        n = n - m;
        gcd = n;
      }
    }
    return gcd;
  }

  let reductedFraction = new Fraction(reductNumerator, reductDenominator);
  return console.log(reductedFraction);
}

calcSum(fractionOne, fractionTwo);
calcSub(fractionOne, fractionTwo);
calcMul(fractionOne, fractionTwo);
calcDiv(fractionOne, fractionTwo);
reductFraction(fractionOne);

// Task 3 - time obj
let userValue = prompt('Enter a date');

let days = parseInt(prompt('You would like to add __ days to the entered time'));
let hrs = parseInt(prompt('You would like to add __ hours to the entered time'));
let min = parseInt(prompt('You would like to add __ minutes to the entered time'));
let sec = parseInt(prompt('You would like to add __ seconds to the entered time'));

let userDate = new Date(userValue);
let updatedDate = new Date(userDate);

function changeDate(date) {
  updatedDate.setDate(date.getDate() + days);
  updatedDate.setHours(date.getHours() + hrs);
  updatedDate.setMinutes(date.getMinutes() + min);
  updatedDate.setSeconds(date.getSeconds() + sec);

  return console.log(`You entered ${date}. Updated time is ${updatedDate}.`);
}

changeDate(userDate);