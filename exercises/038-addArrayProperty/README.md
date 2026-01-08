# `037` addArrayProperty

## 📝 Instructions:

1. Write a function called `addArrayProperty`. 
    + `addArrayProperty` takes an object, a string key, and an array as input.
    + `addArrayProperty` sets a new property on the object at the given key, with its value set to the given array.

## 📎 Example:

```Javascript
let myObj = {};
let myArray = [1, 3];
console.log(myObj); // --> {}
addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty); // --> [1, 3]
```
