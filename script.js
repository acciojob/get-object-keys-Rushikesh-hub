const student = {
  name: "John"
};

function getKeys(obj) {
  return Object.keys(obj);
}
console.log(getKeys(student));
console.log(getKeys({ name: "John", age: 20, city: "New York" }));
