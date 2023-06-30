console.log("---------- 32. Activating Strict Mode -----------");

("use strict");

let hasDriversLicense;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

const interface = "audio";
const private = 555;
//we can't declare variables which has kind of this name

console.log("---------- 33. Functions -----------");
function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges}`;
  return juice;
}
fruitProcessor(5, 0);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

console.log("---------- 34. Function Declarations vs. Expressions -----------");
// function declaration
function calcAge1(birthYear) {
  // function with name
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

// function expressions
const calcAge2 = function (birthYear) {
  // function without name
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);

console.log("---------- 35. Arrow Functions -----------");
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

console.log("---------- 36. Functions Calling Other Functions -----------");

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

console.log("---------- 37. Reviewing Functions -----------");
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const _yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  // if you don't want ignore your code, you must write your code before return command
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }

  //   return retirement;
  //   return `${firstName} retires in ${retirement} years`;
};
console.log(_yearsUntilRetirement(1991, "Jonas"));
console.log(_yearsUntilRetirement(1950, "Mike"));

console.log("---------- 39. Introduction to Arrays -----------");
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]); //last element of the array

friends[2] = "Jay";
console.log(friends);
// array of friends declared const but arrays are not primitive ones so even declared const we can change array elements
//but not all array at a one time
//friends = ['Bob', 'Alice'];

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);

//Exercise
const _calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const year = [1990, 1967, 2002, 2010, 2018];

const _age1 = calcAge(years[0]);
const _age2 = calcAge(years[1]);
const _age3 = calcAge(years[years.length - 1]);
console.log(_age1, _age2, _age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
