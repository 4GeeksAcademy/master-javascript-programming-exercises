# `151` detectOutlierValue

## 📝 Instructions:

1. Declare a function named `detectOutlierValue`.

2. Function accepts a `string` parameter.

3. When calling the function, it returns the position the outlier value is, and it should be 1-indexed, not 0-indexed.

## 📎 Example 1:

```js
// The third number is odd, while the rest of the numbers are even
let output = detectOutlierValue("2 4 7 8 10");
console.log(output); // --> 3
```

## 📎 Example 2:

```js
// The second number is even, while the rest of the numbers are odd
let output = detectOutlierValue("1 10 1 1");
console.log(output); // --> 2
```
