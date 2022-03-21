# `108` getSmallestElementAtProperty

## 📝 Instructions:

1. Write a function called `getSmallestElementAtProperty`. Given an object and a key, `getSmallestElementAtProperty` returns the smallest element in the array located at the given key.

## Example:

```Js
var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
```

## 💡 Hints:

+ If the array is empty, it should return an empty array `[]`.

+ If the property at the given key is not an array, it should return an empty array `[]`. 

+ If there is no property at the key, it should return an empty array `[]`.

