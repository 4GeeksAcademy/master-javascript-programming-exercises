# `151` detectOutlierValue

## 📝 Instrucciones:

1. Declare una función llamada `detectOutlierValue`.

2. La función acepta el parámetro llamado `string`, cuyo valor de argumento será `string`.

3. Cuando se llama a la función, el valor devuelto debe estar indexado en 1, no en 0. (1-indexed, not indexed 0)

## Ejemplo:

```js
detectOutlierValue("2 4 7 8 10"); // => 3 - el tercer número es impar, mientras que el resto de los números son pares

detectOutlierValue("1 10 1 1");  //=> 2 - el segundo número es par, mientras que el resto de los números son impares
```