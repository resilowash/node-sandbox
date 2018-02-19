const car1 = {
  make: "Ferrari",
  model: "308",
  year: 1989,
  color: "red"
}

const car2 = Object.assign({}, car1);
let car3 = {
  make: "acura",
  model: "nsx",
  year: 1990,
  color: "gray"
}
car3 = Object.assign({}, car1);

console.log(car2.make);
console.log(car3.make);
