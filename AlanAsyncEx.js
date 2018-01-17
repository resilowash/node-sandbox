// Author: Alan Barker
// Sample function to return a promise that will either
// resolve or reject in 1 second
//
// pass rejected = true to reject
// pass rejected = false (default) to resolve
//
const getPromiseAsync = (rejected = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rejected) {
        reject('getPromiseAsync() - REJECTED')
      } else {
        resolve('getPromiseAsync() - RESOLVED')
      }
    }, 1000)
  })
}

//
// Function to illustrate why using old style promises to
// execute things in sequence sucks
//
const doItTheSuckyWay = () => {
  console.log('\nTHE SUCKY WAY...')

  return getPromiseAsync()
    .then((data) => {
      console.log(data)

      // I have to return a promise from inside .then()
      // with yet another .then()... what if I wanted
      // to chain a 3rd call... or a 4th?
      return getPromiseAsync(true)
        .then((data) => {
          console.log(data)
        })
    })
    // Errors handled with a callback... why??
    .catch((e) => {
      console.log(e)
    })
    // Acts like 'finally', because THAT makes sense
    .then(() => {
      console.log('Ok I\'m done now')
    })
}

//
// Function to illustrate why using async/await to execute
// things in sequence is awesome sauce
//
// Flagging the function as async does 2 things:
// 1. Implicitly returns a promise that either resolves
//    with the function return value or rejects with
//    any excetpion thrown from the function
// 2. Allows the use of 'await' for further awesomeness
//
const doItTheAwesomeWay = async () => {
  console.log('\nTHE AWESOME WAY...')

  try {
    // Putting 'await' in front of ANY call that returns
    // a promise will block on that call until the promise
    // resolves or rejects.  If it resolves, it will simply
    // return the resolve value.  If it rejects, it will throw
    // an exception with the reject value.
    //
    // Note I said ANY call that returns a promise... this will
    // also work on calling an async function because async
    // functions implicitly return promises.
    let data = await getPromiseAsync()
    console.log(data)

    // Note how I can just write code here for the next call in
    // a sane way that doesn't make my brain bleed
    data = await getPromiseAsync(true)
    console.log(data)
  }
  // Errors are handled using standard try/catch
  catch (e) {
    console.log(e)
  }

  // We don't need a 'finally' because this is guaranteed to execute
  // when everything else is done
  console.log('Ok I\'m done now')
}

// the () => syntax is making an annonymous function that calls doItTheAwesomeWay() 
doItTheSuckyWay().then(() => doItTheAwesomeWay())