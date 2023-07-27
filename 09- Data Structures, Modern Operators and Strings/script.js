'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

console.log('------------------103. Destructuring Arrays---------------');
//exp.
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//----------------------------------------------------------------

//exp.    < Switching Variables >
let [main, secondary] = restaurant.categories;
console.log(main, secondary); // Italian Pizzeria

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); //Pizzeria Italian    -> switched
// we used a temperory variable between two variables

//-------- Lets make this with destructuring
//we are assigning the values of the two variables
//we don't need temporary (temp) variable
[main, secondary] = [secondary, main];
console.log(main, secondary); //Italian Pizzeria    -> switched again

//-------------- Receive 2 return values from a function ----------------
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); //Garlic Bread Pizza

const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j); //(2) [5, 6]

//Let's make Destructuring in Destructuring = nested Destructuring
const nested2 = [2, 4, [5, 6]];
const [l, , [m, n]] = nested;
console.log(l, m, n); //2 5 6

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); //8 9 1

console.log('------------------104. Destructuring Objects---------------');
const restaurant2 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function (starterIndex, mainIndex, time, address) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delevered to ${address} at ${time} `
    );
  },

  orderPasta: function (ingredient1, ingredient2, ingredient3) {
    console.log(
      `Here is your delicious pasta with ${ingredient1},${ingredient2} and ${ingredient3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant2.orderDelivery({
  time: '22.30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

//using objects' original name
const { name, openingHours, categories } = restaurant2;
console.log(name, openingHours, categories);

//changing objects' original name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant2;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant2;
console.log(menu, starters);
// []
// (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Mutating variables
let _a = 111;
let _b = 999;
const obj = { _a: 23, _b: 7, _c: 14 };
({ _a, _b } = obj);
console.log(_a, _b); //23 7

// Nested objects
const {
  fri: { open: o, close: c_ },
} = openingHours;
console.log(o, c_); //11 23

console.log('------------------105. The Spread Operator (...)---------------');
const _arr = [7, 8, 9];
const badNewArr = [1, 2, _arr[0], _arr[1], _arr[2]];
console.log(badNewArr); //[1, 2, 7, 8, 9]

const _newArr = [1, 2, ..._arr];
console.log(_newArr); //[1, 2, 7, 8, 9]

const newMenu = [...restaurant2.mainMenu, 'Gnocci'];
console.log(newMenu); //['Pizza', 'Pasta', 'Risotto', 'Gnocci']

//we can use spread operator only when we used commas(,)

//Copy array
const mainMenuCopy = [...restaurant2.mainMenu];

// Join 2 arrays
const _menu = [...restaurant2.mainMenu, ...restaurant2.starterMenu];
console.log(_menu);
//['Pizza', 'Pasta', 'Risotto', 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
//['J', 'o', 'n', 'a', 's', ' ', 'S.']

/* where we use spread element?

when building an array,
when we pass the values into a function 

*/

console.log(...str); //J o n a s

//console.log(`${...str} Schmedment`); //Unexpected token '...'

//Real world example
const ingredients = [
  prompt("Let's make pasta! Ingredient 1 ?"),
  prompt("Let's make pasta! Ingredient 2 ?"),
  prompt("Let's make pasta! Ingredient 3 ?"),
];
console.log(ingredients);

restaurant2.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant2.orderPasta(...ingredients);
//they make same thing

//Objects
const newRestaurant = { foundeIn: 1998, ...restaurant2, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant2 };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant2.name);

console.log(
  '------------------106. Rest Pattern and Parameters---------------'
);

// 1) Destructuring

//SPREAD, because on RIGHT side of =
const arr2 = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
const [d, e, ...others] = [1, 2, 3, 4, 5];
console.log(d, e, ...others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant2.mainMenu,
  ...restaurant2.starterMenu,
];
console.log(pizza, risotto, ...otherFood);

//Objects
const { sat, ...weekdays } = restaurant2.openingHours;
console.log(weekdays);
//{thu: {…}, fri: {…}}

// 2)Functions
const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const f = [23, 5, 7];
add(...f);

restaurant2.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
/*
mushrooms
 (3) ['onion', 'olives', 'spinach']
*/
restaurant2.orderPizza('mushrooms');
/*
mushrooms
[]
*/

console.log(
  '------------------107. Short Circuiting (&& and ||)---------------'
);
// Use ANY data type,return ANY data type, short-circuiting
/* remember
In JavaScript, we have 6 falsy values:
false.
0 (zero)
'' or “” (empty string)
null.
undefined.
NaN
*/

console.log('-----------OR---------');
console.log(3 || 'Jonas'); //3
console.log('' || 'Jonas'); //Jonas
console.log(true || 0); //true
console.log(undefined || null); //null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); //Hello

//  || returns the first true value

const guests1 = restaurant2.numGuests ? restaurant2.numGuests : 10;
// if restaurant2.numGuests is not exists returns 10
console.log(guests1); //10

const guests2 = restaurant2.numGuests || 10;
console.log(guests2); //10

console.log('-----------AND---------');
console.log(0 && 'Jonas'); //0
console.log(7 && 'Jonas'); //Jonas

console.log('Hello' && 23 && null && 'jonas'); //null

//Practical example
if (restaurant2.orderPizza) {
  restaurant2.orderPizza('mushrooms', 'spinach');
}
/**
 mushrooms
 ['spinach']
 */

//similar to if blocks but not recommend
restaurant2.orderPizza && restaurant2.orderPizza('mushrooms', 'spinach');


console.log(
  '------------------108. The Nullish Coalescing Operator (??)---------------'
);
restaurant2.numGuests = 0;
const guests = restaurant2.numGuests || 10;
console.log(guests); //10

//almost same OR operator but it will fix errors
// instead falsy values it works
//Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant2.numGuests ?? 10;
console.log(guestCorrect); //0

console.log(
  '------------------109. Logical Assignment Operators---------------'
);
const rest1 = {
  name: 'Capri',
  numGuests: 20,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

console.log(rest1);
// {name: 'Capri', numGuests: 20}
console.log(rest2);
//{name: 'La Piazza', owner: 'Giovanni Rossi', numberGuests: 10}

//---------------------------------------------------------------

//OR assignment operator
rest1.numGuests ||= 10;
console.log(rest1);

const rest3 = {
  name: 'Capri',
  numGuests: 0,
};
rest3.numGuests ||= 10;
console.log(rest3); //10  (numGuests: 0 -> falsy so )

//Nullish assignment operator
rest3.numGuests ??= 10;
console.log(rest3); //0  (numGuests: 0 -> not falsy so )

//---------------------------------------------------------------
const rest4 = {
  name: 'Capri',
  numGuests: 20,
};
const rest5 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

rest4.owner = rest4.owner && '<ANONYMOUS>';
console.log(rest4);
//{name: 'Capri', numGuests: 20, owner: undefined}

rest5.owner = rest5.owner && '<ANONYMOUS>';
console.log(rest5);
//{name: 'La Piazza', owner: '<ANONYMOUS>'}

//AND assignment operator
rest4.owner &&= '<ANONYMOUS>';
rest5.owner &&= '<ANONYMOUS>';
console.log(rest4);
console.log(rest5);

console.log(
  '------------------111. Looping Arrays: The for-of Loop---------------'
);
const menu_ = [...restaurant2.starterMenu, ...restaurant2.mainMenu];

for (const item of menu_) console.log(item);

//oldschool way
for (const item of menu_.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

//more practive way
for (const [i, el] of menu_.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu_.entries()]);

console.log('------------------112. Enhanced Object Literals---------------');
const _weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const _hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant3 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enchanced object literals
  _hours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery(starterIndex, mainIndex, time, address) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delevered to ${address} at ${time} `
    );
  },

  orderPasta(ingredient1, ingredient2, ingredient3) {
    console.log(
      `Here is your delicious pasta with ${ingredient1},${ingredient2} and ${ingredient3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

console.log('------------------113. Optional Chaining (?.)---------------');
if (restaurant3._hours && restaurant3._hours.mon) {
  console.log(restaurant3._hours.mon.open);
}

//WITH optinal chaining
console.log(restaurant3._hours.mon?.open);
// how does it (?) work?
// if before the ? is exists, will be read after the ?
// exists: not null / undefined
// if it is 0 / '', it still exists

//example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant3._hours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant3.order?.(0, 1) ?? 'Method does not exits');

//Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

// ?? -> is  knowledge quality operators

