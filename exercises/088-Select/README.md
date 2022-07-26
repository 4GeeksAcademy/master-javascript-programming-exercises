# `088` Select

## 📝 Instructions:

1. Write a function called `select`. Given an array and an object, `select` returns a new object whose properties must be on the given array and the given object as well. 

## Example:

```js
let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
```

## 💡 Hint:

+ If keys are present in the given array, but are not in the given object, it should ignore them. 

+ It does not modify the passed in object.
