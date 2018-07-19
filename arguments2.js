const lookNoParams = () => {
  if(arguments.length < 1) {
    console.log('You passed no parameters');
  }
  else {
    console.log('Here are your parameters');
    ///arguments is not an array
    [...arguments].forEach((i) => {
      console.log(i);
    })
  }

}

lookNoParams();
lookNoParams({Name: 'Bill Lumberg'}, {Name: 'John Johnson'});
