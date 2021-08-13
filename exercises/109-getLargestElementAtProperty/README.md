# `109` getLargestElementAtProperty

## 📝 Instructions:

1. Write a function called `getLargestElementAtProperty`.

Given an object and a key, `getLargestElementAtProperty` returns the largest element in the array located at the given key.

## :bulb: Hint:

 * If the array is empty, it should return `undefined`.

* If the property at the given key is not an array, it should return `undefined`.

* If there is no property at the key, it should return `undefined`.


```Js
var obj = {
  key: [1, 2, 4]
};
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
```