# `106` getEvenElementsAtProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getEvenElementsAtProperty`.

Dado un objeto y una key, `getEvenElementsAtProperty` regresa un array que contenga todos los elementos pares del array localizados en la key dada.

## :bulb: Pista:

* Si el array está vacío, debe regresar un array vacío.

* Si el array no contiene elementos pares, debe regresar un array vacío.

* Si la propiedad en la key dada no es un array, debe regresar un array vacío.

* Si no hay propiedad en la key dada, debe regresar un array vacío.

```js
var obj = {
  key: [1000, 11, 50, 17]
};
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
```