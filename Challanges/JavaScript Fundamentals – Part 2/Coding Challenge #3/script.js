/*
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).
*/

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

function compareBMIs() {
  if (mark.calcBMI() > john.calcBMI()) {
    return `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
      john.fullName
    }'s (${john.calcBMI()})!`;
  } else {
    return `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
      mark.fullName
    }'s (${mark.calcBMI()})!`;
  }
}

console.log(compareBMIs());
