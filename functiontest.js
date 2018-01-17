const textOut = text => {
  console.log("Your text: ", text);
}

(() => {
  textOut("Hello");
})();

//annonymous function with iife syntax calling it immediately after creation. 
//textOut("hello");