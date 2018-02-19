const callback1 = function(text, callback) {

  text = "Modified Text " + text;
  callback(text);

}

callback1("hello", function() {
  console.log()
})
