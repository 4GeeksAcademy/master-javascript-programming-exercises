# `071` removeStringValuesLongerThan

## 📝 Instructions:

1. Write a function called `removeStringValuesLongerThan`. Given a number and an object, `removeStringValuesLongerThan` removes any properties on the given object whose values are strings longer than the given number.

## Example:

```Javascript
let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
```
