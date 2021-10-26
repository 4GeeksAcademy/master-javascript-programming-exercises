# `70` removeNumbersLessThan

## 📝 Instrucciones:

Escribe una función llamada `removeNumbersLessThan`.

Dado un número y un objeto, `removeNumbersLessThan` elimina cualquier propiedad cuyos valores sean números menores que el número dado. 

```Javascript
var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLessThan(5, obj);
console.log(obj); // --> { a: 8, c: 'montana' }
```