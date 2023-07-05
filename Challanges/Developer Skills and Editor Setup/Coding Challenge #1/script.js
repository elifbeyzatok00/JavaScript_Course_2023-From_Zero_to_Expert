const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const printForeCast = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ...`;
  }
  console.log("..." + str);
};

printForeCast(data1);
printForeCast(data2);
