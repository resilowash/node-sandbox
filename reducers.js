//illustrate a reducer

const array1 = [1,2,3,4];

//define a reducer function returns the accumulator + the current value
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const reducer2 = (accumulator, currentValue) => accumulator + currentValue.toString();

console.log(array1.reduce(reducer));
console.log(array1.reduce(reducer2)); 
