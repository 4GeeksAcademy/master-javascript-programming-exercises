# `140` modulo

## 📝 Instrucciones

Escribe una función llamada "módulo".

Dados 2 números, "módulo" retorna el resto después de dividir num1 entre num2.

Debe comportarse como se describe en la documentación canónica (MDN) para el operador de JavaScript restante:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

Notas:
* NO use el operador de módulo incorporado real (también conocido como "resto") (%) en su implementación.
* 0 % ANYNUMBER = 0.
* ANYNUMBER % 0 = NaN.
* Si cualquiera de los operandores es NaN, entonces el resultado es NaN.
* El módulo siempre devuelve el signo del primer número.

```Js
var output = modulo(25, 4);
console.log(output); // --> 1
```