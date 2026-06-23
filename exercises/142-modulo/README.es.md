# `142` modulo

## 📝 Instrucciones:

1. Escribe una función llamada `modulo`. Dados 2 números, `modulo` retorna el resto después de dividir `num1` entre `num2`.

## 📎 Ejemplo:

```Js
let output = modulo(25, 4);
console.log(output); // --> 1
```

## 💡 Pistas:

+ La función debe comportarse como se describe en la [documentación canónica (MDN) para el operador resto de JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Remainder).

+ NO uses el operador de módulo incorporado (también conocido como "resto") (`%`) en la implementación.

+ `0 % anyNumber = 0`.

+ `anyNumber % 0 = NaN`.

+ Si cualquiera de los operadores es `NaN`, entonces el resultado es `NaN`.

+ `modulo` siempre devuelve el signo del primer número.

