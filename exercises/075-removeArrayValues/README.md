# `075` removeArrayValues

## 📝 Instructions:

1. Write a function called `removeArrayValues`. Given an object, `removeArrayValues` removes any properties whose values are arrays.

## Example:

```Javascript
let obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }
```