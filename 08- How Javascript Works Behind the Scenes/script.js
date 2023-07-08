'use strict';
console.log('-------------- 93. Scoping in Practice --------------');
function calAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    // add(2, 3);
  }

  printAge();
  return age;
}

const firstName = 'Jonas';
calAge(1991);

console.log(
  '-------------- 94. Variable Environment: Hoisting and The TDZ --------------'
);

/*
TDZ = Temporal Dead Zone
ES6 olarak da bilinen ECMAScript 6 güncellemesi ile birlikte JavaScript dünyasına giren let ve const anahtar kelimeleri, var anahtar kelimesinden farklı olarak değişkenlerin blok seviyesinde tanımlanabilmesini sağlamıştır.

JavaScript’te const ve let anahtar kelimeleri, var anahtar kelimesine göre daha güçlü kapsam (scope) ve başlangıç değeri kısıtlamalarına sahiptir. Bu farklılıklar nedeniyle const ve let ile tanımlanan değişkenlerde TDZ görülürken, var ile tanımlanan değişkenlerde görülmez.

Eğer bir değişken tanımlandığı satırdan önce kullanılmaya çalışılırsa TDZ’ye düşer ve ReferenceError hatasına yol açar. 
*/

console.log('-------------- 95. Hoisting and TDZ in Practice --------------');
//variables are in TDZ
/*
console.log(me); //undefined
console.log(job); //ReferenceError
console.log(yearn); //ReferenceError

var me = 'Jonas';
let job = 'teacher';
const year = 1991;
*/

//functions are in TDZ
/*
console.log(addDecl(2, 3)); //5
console.log(addExpr(2, 3)); //Uncaught ReferenceError: Cannot access 'addExpr' before initialization
console.log(addArrow(2, 3)); //Uncaught TypeError: addArrow is not a function

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;
*/

//Example
console.log(undefined);
if (!numProducts) deleteShoppingCart(); // numProducts = undefined = falsy

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); //trues
console.log(y === window.y); //falses
console.log(z === window.z); //falses

console.log('-------------- 97. The this Keyword in Practice --------------');
console.log(this); //46

function _calcAge(birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //undefined
}
_calcAge(1991);

const calcArrow = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //undefined
};

calcArrow(1980); //57

// in methods, this calls the method
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // jonas object -> {year: 1991, calcAge: ƒ}
    console.log(2037 - this.year); //46
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};
matilda.calAge = jonas.calcAge;
matilda.calAge();
/*
  {year: 2017, calAge: ƒ}
  20
*/

/*
const f = jonas.calcAge;
f(); //typeerror
*/
