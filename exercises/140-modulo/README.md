# `140` modulo

## 📝 Instructions:

1. Write a function called `módulo`.

Given 2 numbers, `módulo` returns the "remainder" after dividing `num1` by `num2`.

It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

## :bulb: Hint:

* Do NOT use the actual built-in modulo (aka "remainder") operator (`%`) in your implementation.

* `0 % ANYNUMBER = 0`.

* `ANYNUMBER % 0 = NaN`.

* If either operand is `NaN`, then the result is `NaN`.

* Modulo always returns the sign of the first number.

```Js
var output = modulo(25, 4);
console.log(output); // --> 1
```