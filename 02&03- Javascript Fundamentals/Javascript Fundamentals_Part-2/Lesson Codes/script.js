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
