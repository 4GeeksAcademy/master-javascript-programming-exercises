function addObjectProperty(obj1, key, obj2) {
  // Add your code after this line
let name = obj1.name;
let role = obj1.role;
obj1[key] = obj2;
return obj1;
}

let person1 = {
  name: 'Joe Blow',
  role: 'schlub'
};
let person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};
addObjectProperty(person1, 'manager', person2);
console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }