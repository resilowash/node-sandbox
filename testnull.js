const add = (x=1,y=0) => {
  return x + y;
}

console.log("Using Undefined: ", add(undefined, 5));
console.log("Using Null: ", add(null,5));
// console.log("Using Empty param: ", add(,5));  //doesn't work

const reduceadd = (accumulator, currentValue) => accumulator + currentValue;


testarr = [1,2,3,4,5];
testarr.push(...[6,7,8]);

console.log(testarr);
console.log(testarr.reduce(reduceadd));
