const moment = require('moment');

const funct = setInterval(() =>{
  let now = moment();
  let status = getStatus(parseInt(now.format("ss")));
  //console.log(status);
  console.log("Current time: ", moment().format('hh:mm:ss a'));
  if(status === 'STOP') {
    clearInterval(funct);
    console.log('interval cleared');
  }
}, 1000);


const getStatus = (second) => {
  //once it hits any tenth second send the stop signal
  //console.log(second);
  if(second % 10 == 0) {
    return 'STOP';
  }
  return 'GO';
};
