//displaying use of the hidden parameters arguments

/*
(() => {
  let i = 0;
  let sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log("Sum of arguments: ", sum);
})(5, 6, 7, 1);
*/

//this way works
function sum() {
  var i = 0;
  var sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log("Sum of arguments: ", sum);
}

sum(5, 6, 7, 1);

//this way works
const test = function sum() {
  var i = 0;
  var sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log("Sum of arguments: ", sum);
}

test(5, 2, 3);


//this way does not
const test2 = () => {
  var i = 0;
  var sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log("Sum of arguments: ", sum);
}

test2(5, 2, 4);