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
};

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
