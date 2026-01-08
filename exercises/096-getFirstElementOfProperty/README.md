# `092` getFirstElementOfProperty

## 📝 Instructions:

1. Write a function called `getFirstElementOfProperty`. Given an object and a key, `getFirstElementOfProperty` returns the first element of the array located at the given key. 

## 📎 Example:

```js 
let obj = {
  key: [1, 2, 4]
};
let output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1
```

## 💡 Hints:

+ If the array is empty, it should return `undefined`.

+ If the property at the given key is not an array, it should return `undefined`.

+ If there is no property at the key, it should return `undefined`.
