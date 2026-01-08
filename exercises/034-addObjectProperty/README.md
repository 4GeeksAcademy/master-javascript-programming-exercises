# `033` addObjectProperty

## 📝 Instructions:

1. Write a function called `addObjectProperty`. This function takes two objects and a key as arguments.
2. The `addObjectProperty` function must set a new property on the first object using the key provided. The value of this new property must be the second object.
3. The `addObjectProperty` function must return the first object modified with the new property.

## 📎 Example:

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
console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }
```
