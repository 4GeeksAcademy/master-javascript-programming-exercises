# `88` Select

## 📝 Instrucciones:

1. Escribe una función llamada `select`.

Dados un array y un objeto, `select` retorna un nuevo objeto cuyas propiedades correspoden al del objeto dado **Y** cuyas keys están presentes en el array dado.

## :bulb: Pista:

+ Si las keys están presentes en el array dado, pero no en el objeto dado, debería ignorarlas.

+ No modifica el objeto en el pasado.

```js
var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
```