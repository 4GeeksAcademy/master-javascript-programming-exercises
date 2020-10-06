# `88` Select

## 📝 Instrucciones

Escribe una función llamada "select".

Dado un array y un objeto, "select" retorna un nuevo objeto en el objeto dado Y cuyas keys están presentes en el array dado.

Notas:
* Si las keys están presentes en el array dado, pero no en el objeto dado, debería ignorarlas.
* No modifica el objeto pasado.

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