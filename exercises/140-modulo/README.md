# `140` modulo

## 📝 Instructions:

1. Write a function called `modulo`. Given 2 numbers, `modulo` returns the "remainder" after dividing `num1` by `num2`.

## 📎 Example:

```Js
let output = modulo(25, 4);
console.log(output); // --> 1
```

## 💡 Hints:

+ It should behave as described in the [canonical documentation (MDN) for the JavaScript remainder operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)

+ Do NOT use the actual built-in modulo (aka "remainder") operator (`%`) in your implementation.

+ `0 % anyNumber = 0`.

+ `anyNumber % 0 = NaN`.

+ If either operand is `NaN`, then the result is `NaN`.

+ `modulo` always returns the sign of the first number.

