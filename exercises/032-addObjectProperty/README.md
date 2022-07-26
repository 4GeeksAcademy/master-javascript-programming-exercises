# `032` addObjectProperty

## 📝 Instructions

1. Write a function called `addObjectProperty`. Given two objects and a key, `addObjectProperty` sets a new property on the 1st object at the given key. The value of that new property is the entire 2nd object.

## Example:

```Javascript
let person1 = {
  name: 'Joe Blow',
  role: 'schlub'
};
let person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};
addObjectProperty(person1, 'manager', person2);
console.log(person1.manager); // --> { name: 'Mr.Burns', role: 'supervisor' }
```