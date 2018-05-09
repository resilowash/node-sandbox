const obj1 = {
  name: "Bill Lumberg",
  position: "Manager",
  id: 1,
  directs: ['Peter Gibbons', 'Samir Notgonnaworkhereanymore']
}

const obj2 = {
  id: 1,
  name: "Bill Lumberg",
  position: "Manager",
  directs: ['Peter Gibbons', 'Samir Notgonnaworkhereanymore']
}

const obj3 = obj1;

console.log("Object 1 and Object 2 equal? ", obj1 == obj2);
console.log("obj 3 is reference to obj1 is obj1 === to obj3", obj1 === obj3);
