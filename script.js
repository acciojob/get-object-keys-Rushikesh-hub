const student = {
  name: "John"
};

Object.prototype.getKeys = function () {
  return Object.keys(this);
};

// Test cases
const myObj1 = { name: "John", age: 30, city: "New York" };
console.log(myObj1.getKeys()); // ["name", "age", "city"]

const myObj2 = { name: "John" };
console.log(myObj2.getKeys()); // ["name"]