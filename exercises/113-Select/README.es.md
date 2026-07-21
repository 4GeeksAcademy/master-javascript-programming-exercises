# `113` select

## 📝 Instrucciones:

1. Escribe una función llamada `select`. Dado un array y un objeto, `select` retorna un nuevo objeto cuyas keys deben estar presentes en el array y el objeto dado.

## 📎 Ejemplo:

```js
let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
```

## 💡 Pistas:

+ Si las keys están presentes en el array dado, pero no en el objeto dado, debería ignorarlas.

+ No modifica el objeto dado.
