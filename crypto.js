const crypto = require('crypto');
const bcrypt = require('bcrypt');

let salt = crypto.randomBytes(64);
let password = 'mypassword';

console.log("your generated salt base64: ", salt.toString('base64') );
console.log("your generated salt utf8: ", salt.toString('utf8') );

//salt the password
password = salt.toString('base64') + password;
//let hashedPassword = bcrypt.hashSync(password, 10);
let hashedPassword = bcrypt.hashSync(password, salt.toString('base64'));

console.log('Salted Hashed Password: ', hashedPassword);
