const moment = require('moment');

console.log(moment().format('MM/DD/YYYY hh:mm:ss a'));
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

const now = moment();

//using now and formatting only
console.log(now.format('MM/DD/YYYY hh:mm:ss SSS a'));
console.log(now.format('MMMM Do YYYY, hh:mm:ss SSS a'));
