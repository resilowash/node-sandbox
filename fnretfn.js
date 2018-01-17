const f1 = () => {
  console.log("Hello I'm a function and here's a function");
  return (text) => {
    console.log("This is your text: ", text)
  };
};

f1()("My text");
