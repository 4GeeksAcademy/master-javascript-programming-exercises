# `075` removeArrayValues

## 📝 Instrucciones:

1. Escribe una función llamada `removeArrayValues`. Dado un objeto, `removeArrayValues` elimina cualquier propiedad cuyos valores sean arrays.

## Ejemplo:

```Javascript
let obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }
```