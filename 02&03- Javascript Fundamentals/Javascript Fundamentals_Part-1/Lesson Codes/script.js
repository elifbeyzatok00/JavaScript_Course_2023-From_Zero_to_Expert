console.log("----------- 9. Values and Variables ---------");
let js = "amazing";
console.log(40 + 8 + 32 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
let first = "jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);

console.log("---------- 11. Data Types ----------");

let jsFUN = true;

console.log(jsFUN);
console.log(typeof jsFUN);
console.log(typeof 23);

jsFUN = "YES";
console.log(jsFUN);
console.log(typeof jsFUN);

let year;
console.log(year); //undefined
console.log(typeof year); //undefined

year = 1991;
console.log(typeof year); //number

console.log(typeof null); //objects  -> bu bir js hatası aslında undefined döndürmeli

console.log("---------- 12. let, const, var -----------");
let age = 30;
age = 31; //mutated -> let is mutable
// let is block scope

const birtYear = 1991;
// birtYear = 1990; //TypeError  -> const is unmutable
// using const is most safity for clean code

var job = "programmer";
job = "teacher"; //mutated -> var is mutable
// var is similar to let. But var is an old version to defining type. So doesn't recommend to use. so never use var
// var is function scope

// never define variables without a type.
// when define variables without a type, js create a property on the global object
lastName = "Tok"; // kind of this assignments work but don't do it
console.log(lastName);

console.log("---------- 13. Basic Operators -----------");
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);

const firstName_ = "Jonas";
const lastName_ = "Schedmant";
console.log(firstName_ + " " + lastName_);

// assignment operators
let x = 10 + 5;
console.log(x);

x += 10; // x = x + 10
x++; // x = x + 1
console.log(x);

// comparison operators ->  >, <, >=, <=
console.log(ageJonas > ageSarah); //true
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);

console.log("---------- 14. Operator Precedence -----------");
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

let _x, y;
_x = y = 25 - 10 - 5; // x = y = 10
console.log(_x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

console.log("---------- 17. Strings and Template Literals -----------");
const _firstName = "Jonas";
const _job = "teacher";
const _birtYear = 1991;
const _year = 2037;

const jonas =
  "I'm " +
  _firstName +
  ", a " +
  (_year - birtYear) +
  " years old " +
  _job +
  "!";
console.log(jonas);

const jonasNew = `I'm  ${_firstName}, a  ${
  _year - birtYear
} years old ${_job}!`;
console.log(jonasNew);

// in js \n\ is meaning new line. it is a bug for js actualy :)
console.log(
  "String with \n\
   multiple \n\
   lines"
);

// you can go new line witout \n\ too but you need to use backticks
console.log(
  `String with
     multiple
     lines`
);

console.log(
  "---------- 18. Taking Decisions: if / else Statements -----------"
);

const _age = 15;
const isOldEnough = _age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving license🚗");
} else {
  const yearsLeft = 18 - _age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

console.log("---------- 20. Type Conversion and Coercion -----------");
//Type Conversion
const inputYear = "1991";
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

console.log(Number("Jonas")); //NaN
console.log(typeof NaN); //number

console.log(String(23), 23); //NaN

console.log("---------- 21. Truthy and Falsy Values -----------");
// js has 5 falsy values: 0, '', undefined, null, NaN
// falsy values turns false when converted type of boolean

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("Jonas")); //true
console.log(Boolean({})); //true
console.log(Boolean("")); //false

const money = 0; //false
if (money) {
  console.log("don't spend it all");
} else {
  console.log("You should get a job"); // this will work
}

let height; //false
if (height) {
  console.log("defined");
} else {
  console.log("undefined"); // this will work
}

console.log("---------- 22. Equality Operators: == vs. === -----------");
const __age = 18;
if (__age === 18) console.log("You just became an adult :D");

const favorite = prompt("What's your favorite number?");
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log("Cool! Good number.");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favorite !== 23) console.log("Why not 23?");
