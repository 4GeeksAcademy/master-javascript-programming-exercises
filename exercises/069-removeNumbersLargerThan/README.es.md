# `069` removeNumbersLargerThan

## 📝 Instrucciones:

1. Escribe una función llamada `removeNumbersLargerThan`. Dado un número y un objeto, `removeNumbersLargerThan` elimina cualquier propiedad cuyos valores sean números mayores que el número dado.

## 📎 Ejemplo:

```Javascript
let obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }
```

## 💡 Pista:

+ Recuerda usar el bucle `for...in` para iterar sobre las propiedades de un objecto.
