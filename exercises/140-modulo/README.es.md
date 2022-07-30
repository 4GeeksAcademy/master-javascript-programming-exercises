# `140` modulo

## 📝 Instrucciones:

1. Escribe una función llamada `modulo`. Dados 2 números, `modulo` retorna el resto después de dividir `num1` entre `num2`.

## Ejemplo:

```Js
let output = modulo(25, 4);
console.log(output); // --> 1
```

## 💡 Pistas:

+ La función Debe comportarse como se describe en la (documentación canónica [MDN) para el operador resto deJavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_())

+ NO uses el operador de módulo incorporado (también conocido como "resto") (`%`) en la implementación.

+ `0 % ANYNUMBER = 0`.

+ `ANYNUMBER % 0 = NaN`.

+ Si cualquiera de los operandores es `NaN`, entonces el resultado es `NaN`.

+ `modulo` siempre devuelve el signo del primer número.

