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
