// const makeRequest = () => {
//   return getResponse()
//     .then(data => {
//       console.log("This is your response: ", data);
//     })
// }

const makeRequest = () => {
  console.log("This is your response: ", getResponse());
}

const getResponse = () => {
  setTimeout(function() {
    let data = {
      name: 'Bill Lumberg',
      occupation: 'Manager - Initech',
      complaint: 'Stolen Red Stapler'
    }
    return data;
  }, 3000);
  console.log("getting data");
}

//console.log(getResponse());
makeRequest();