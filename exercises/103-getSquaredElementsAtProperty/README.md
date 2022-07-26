# `103` getSquaredElementsAtProperty

## 📝 Instructions:

1. Write a function called `getSquaredElementsAtProperty`. Given an object and a key, `getSquaredElementsAtProperty` returns an array containing all the squared elements of the array located at the given key.

## Example:

```Js
let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
```

## 💡 Hints:

* If the array is empty, it should return an empty array.

* If the property at the given key is not an array, it should return an empty array.

* If there is no property at the key, it should return an empty array.
