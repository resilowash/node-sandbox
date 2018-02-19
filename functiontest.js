const textOut = text => {
  console.log("Your text: ", text);
}

(() => {
  textOut("Hello");
})();
//annonymous function with iife syntax calling it immediately after creation. .
//textOut("hello");

let text = " Javascript isn't confusing at all ";
//console log function wrapping an annonymous function returning text directly wrapped in an iffe.
console.log((() => text )());

//passthrough bool function 
const pt = (text ) => (text != null);

console.log("Passthrough function: ", pt("This is text"));
