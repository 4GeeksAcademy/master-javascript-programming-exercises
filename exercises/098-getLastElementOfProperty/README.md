# `094` getLastElementOfProperty

## 📝 Instructions: 

1. Write a function called `getLastElementOfProperty`. Given an object and a key, `getLastElementOfProperty` returns the last element of an array located at the given key.

## 📎 Example:

```js
let obj = {
  key: [1, 2, 5]
};
let output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5
```

## 💡 Hints:

+ If the array is empty, it should return `undefined`.

+ If the property at the given key is not an array, it should return `undefined`.

+ If there is no property at the key, it should return `undefined`.
