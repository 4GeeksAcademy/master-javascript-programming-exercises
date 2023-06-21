# `089` getElementsThatEqual10AtProperty

## 📝 Instructions:

1. Write a function called `getElementsThatEqual10AtProperty`. Given an object and a key, `getElementsThatEqual10AtProperty` returns an array containing all the elements of the array located at the given key that are equal to ten.

## 📎 Example:

```js
let obj = {
  key: [1000, 10, 50, 10]
};
let output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]
```

## 💡 Hints:

+ If the array is empty, it should return an empty array `[]`.

+ If the array contains no elements equal to 10, it should return an empty array `[]`.

+ If the property at the given key is not an array, it should return an empty array `[]`.

+ If there is no property at the key, it should return an empty array `[]`.
