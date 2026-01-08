# `069` removeNumbersLargerThan

## 📝 Instructions:

1. Write a function called `removeNumbersLargerThan`. Given a number and an object, `removeNumbersLargerThan` removes any property whose value are numbers greater than the given number.

## 📎 Example:

```Javascript
let obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }
```

## 💡 Hint:

+ Remember to use the `for...in` loop to iterate through the properties of an object.
