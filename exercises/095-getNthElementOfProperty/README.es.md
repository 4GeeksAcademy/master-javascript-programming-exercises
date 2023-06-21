# `095` getNthElementOfProperty 

## 📝 Instrucciones:

1. Escribe una función llamada `getNthElementOfProperty`. Dado un objeto, una key y un número *n*, `getNthElementOfProperty` retorna el elemento *nth* de un array ubicado en la key dada.

## 📎 Ejemplo:

```js
let obj = {
  key: [1, 2, 6]
};
let output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2
```

## 💡 Pistas:

+ Si el array está vacío, debería retornar `undefined`.

+ Si *n* está fuera de rango, debería retornar `undefined`.

+ Si la propiedad en la key dada no es un array, debería retornar `undefined`.

+ Si la key no tiene propiedad, debería retornar `undefined`.
