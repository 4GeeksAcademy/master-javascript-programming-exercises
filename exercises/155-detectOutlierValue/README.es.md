# `155` detectOutlierValue

## 📝 Instrucciones

Dado un string de números pares e impares, encuentra cuál es el único número par o el único número impar.

El valor de retorno debe estar indexado en 1, no indexado en 0. (1-indexed, not 0-indexed.)

Ejemplo:
```js
detectOutlierValue("2 4 7 8 10"); // => 3 - tercer numero es impar, mientras que el resto de los números son pares
detectOutlierValue("1 10 1 1");  //=> 2 - Segundo numero es par, mientras que el resto de los números son impares
```