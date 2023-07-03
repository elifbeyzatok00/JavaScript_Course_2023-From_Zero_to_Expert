// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;

const calcAge = birthYear => 2037 - birthYear;
console.log(calcAge(1991));
console.log();

// cl ->  console.log();

console.log(
  '---------- 61. Debugging with the Console and Breakpoints -----------'
);

const measureKelvin = function () {
  debugger;
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    value: Number(prompt('Degrees celsius:')),
  };

  //   B) FIND
  console.table(measurement); // shows propertys in a table

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());
