# `110` getSumOfAllElementsAtProperty

## 📝 Instructions:

1. Write a function called `getSumOfAllElementsAtProperty`. Given an object and a key, `getSumOfAllElementsAtProperty` returns the sum of all the elements in the array located at the given key.

## 📎 Example:

```Js
let obj = {
  key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
```

## 💡 Hints:

+ If the array is empty, it should return `0`.

+ If the property at the given key is not an array, it should return `0`.

+ If there is no property at the key, it should return `0`.
