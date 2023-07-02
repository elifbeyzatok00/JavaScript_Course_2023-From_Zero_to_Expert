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

console.log("---------- 40. Basic Array Operations (Methods) -----------");
const _friends = ["Michael", "Steven", "Peter"];

//Add elements
const newLength = _friends.push("Jay");
console.log(_friends); //['Michael', 'Steven', 'Peter', 'Jay']
console.log(newLength); //4

_friends.unshift("John");
console.log(_friends); //['John', 'Michael', 'Steven', 'Peter', 'Jay']

//Remove elements
_friends.pop(); //removes the last element
console.log(_friends); //['John', 'Michael', 'Steven', 'Peter']

const popped = _friends.pop();
console.log(popped); //Peter

_friends.shift(); //removes the first element
console.log(_friends); // ['Michael', 'Steven']

console.log(_friends.indexOf("Steven")); //1
console.log(_friends.indexOf("Bob")); //-1   //for not element in there turns -1

//check if there is
console.log(_friends.includes("Steven")); //true
console.log(_friends.includes("Bob")); //false

_friends.push(23);
console.log(_friends.includes(23)); //true
console.log(_friends.includes("23")); //false

if (_friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

console.log("---------- 42. Introduction to Objects -----------");
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

//object literal syntax
const _jonas = {
  //properties: values
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log("---------- 43. Dot vs. Bracket Notation -----------");
const __jonas = {
  //properties: values
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(__jonas);

console.log(__jonas.lastName);
console.log(__jonas["lastName"]);

const nameKey = "Name";
console.log(__jonas["first" + nameKey]); //Jonas
console.log(__jonas["last" + nameKey]); //Schmedtmann

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends"
);

// console.log(__jonas.interestedIn); // undefined
// object of __jonas doesn't have a property named interestedIn so this code returns undefined

console.log(__jonas[interestedIn]); // this code returns object of __jonas's properties

if (__jonas[interestedIn]) {
  console.log(__jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job an friends"
  );
}

//add new properties to the object
__jonas.location = "Portugal";
__jonas["twitter"] = "@jonasschmedtmann";
console.log(__jonas);

//Challange
// "Jonas has 3 friends and his best friend called Michael"

console.log(
  `${__jonas.firstName} has ${__jonas.friends.length} friends and his best friend called ${__jonas.friends[0]} `
);

console.log("---------- 44. Object Methods -----------");
const elif = {
  //properties: values
  firstName: "Elif",
  lastName: "Tok",
  birthYear: 1991,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    console.log(this);
    return 2037 - this.birthYear;
  },

  calcAge2: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};

console.log(elif.calcAge());
console.log(elif["calcAge"]());

//you have to call function to use function's variables!
console.log(elif.calcAge2());
console.log(elif.age);

// Challange
// "Beyza is a 21 years old student, and she has a/no driver's license"

const beyza = {
  firstName: "Beyza",
  birthYear: 2002,
  job: "student",
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  // hasOrNoDriversLicense: function () {
  //   this.msg = hasDriversLicense === true ? "  a " : " no ";
  //   return this.msg;
  // },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    }, and she has ${
      this.hasDriversLicense === true ? "a" : "no"
    } driver's license. `;
  },
};

console.log(beyza.getSummary());

// console.log(beyza.calcAge(), beyza.hasOrNoDriversLicense());
// console.log(
//   `${beyza.firstName} is a ${beyza.age} years old ${beyza.job}, and she has ${beyza.msg} driver's license`
// );

console.log("---------- 46. Iteration: The for Loop -----------");

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
}

console.log(
  "---------- 47. Looping Arrays, Breaking and Continuing -----------"
);
const _jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];
const types2 = [];
for (let i = 0; i < _jonasArray.length; i++) {
  //reading from jonas array
  console.log(_jonasArray[i], typeof _jonasArray[i]);

  // Filling types array
  //solution 1
  types[i] = typeof _jonasArray[i];
  //solution 2
  types2.push(typeof _jonasArray[i]);
}

console.log(types);
console.log(types2);

const _years = [1991, 2007, 1969, 2020];
const _ages = [];

for (let i = 0; i < _years.length; i++) {
  _ages.push(2037 - _years[i]);
}
console.log(_ages);

console.log("---ONLY STRINGS---");
const types3 = [];
for (let i = 0; i < _jonasArray.length; i++) {
  if (typeof _jonasArray[i] !== "string") continue;
  console.log(_jonasArray[i], typeof _jonasArray[i]);
  types3.push(typeof _jonasArray[i]);
}
console.log(types3);

console.log("---BREAK WITH NUMBER---");
const types4 = [];
for (let i = 0; i < _jonasArray.length; i++) {
  if (typeof _jonasArray[i] === "number") break;
  console.log(_jonasArray[i], typeof _jonasArray[i]);
  types4.push(typeof _jonasArray[i]);
}
console.log(types4);

console.log("---------- 48. Looping Backwards and Loops in Loops -----------");

const jonassArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

for (let i = jonassArray.length - 1; i >= 0; i--) {
  console.log(i, jonassArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----------- Starting exercise ${exercise}`);
  for (let rep = 0; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️`);
  }
}

console.log("---------- 49. The while Loop -----------");
for (let rep = 1; rep <= 10; rep++) {
  console.log(`FOR: Lifting weights repetition ${rep} 🏋️`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6);
console.log(dice);
//Math.random() produces random numbers that's greater than or equal to 0 and less than 1
//Math.trunc() returns the integer part of a number by removing any fractional digits.

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice === 6) console.log("Loop is about to end...");
}
