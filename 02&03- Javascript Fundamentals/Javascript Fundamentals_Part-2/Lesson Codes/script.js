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
