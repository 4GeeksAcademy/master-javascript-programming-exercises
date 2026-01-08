# `105` getLargestElementAtProperty

## 📝 Instructions:

1. Write a function called `getLargestElementAtProperty`. Given an object and a key, `getLargestElementAtProperty` returns the largest element in the array located at the given key.

## 📎 Example:

```Js
let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
```

## 💡 Hints:

+ If the array is empty, it should return an empty array `[]`.

+ If the property at the given key is not an array, it should return an empty array `[]`.

+ If there is no property at the key, it should return an empty array `[]`.
