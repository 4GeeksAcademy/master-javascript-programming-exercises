# `70` removeNumbersLessThan

## 📝 Instructions

Write a function called "removeNumbersLessThan".

Given a number and an object, "removeNumbersLessThan" removes any property whose values are numbers less than the given number.


```Javascript
var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLessThan(5, obj);
console.log(obj); // --> { a: 8, c: 'montana' }
```