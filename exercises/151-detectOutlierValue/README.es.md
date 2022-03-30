# `151` detectOutlierValue

## 📝 Instrucciones:

1. Declare una función llamada `detectOutlierValue`.

2. La función acepta el parámetro llamado `string`, cuyo valor de argumento será un `string`.

3. Cuando se llama a la función, el valor devuelto debe estar indexado en 1, no en 0.

## Ejemplo 1:

```js
// el tercer número es impar, mientras que el resto de los números son pares
let output = detectOutlierValue("2 4 7 8 10"); 
console.log(output); // 3
```

## Ejemplo 2:

```js
// el segundo número es par, mientras que el resto de los números son impares
let output = detectOutlierValue("1 10 1 1");  
console.log(output); // 2
```
