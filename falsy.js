let nan = NaN;

console.log('nan = ' + nan);

if(nan == null) {
  console.log("falsy nan == null");
}

let x = '1';

console.log('value as number x = ', parseInt(x));

let emptyStr = '';
console.log('value as number of empty string = ', parseInt(emptyStr));

let nullvar = null;
console.log('value as number of null = ', parseInt(nullvar));


let notTrue = () => {

}
