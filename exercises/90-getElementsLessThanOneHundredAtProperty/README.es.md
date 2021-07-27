# `90` getElementsLessThan100AtProperty

## 📝 Instrucciones:

Escribe una función llamada `getElementsLessThan100AtProperty`.

Dado un objeto y una key, `getElementsLessThan100AtProperty` retorna un array que contiene todos los elementos del array ubicado en esa key menores a 100.

```js
var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]
```
## :bulb: Pista:

+ Si el array está vacío, debería retornar un array vacío.

+ Si el array no contiene ningún elemento menor a 100, debería retornar una array vacío.

+ Si la propiedad en esa key dada no es un array, debería retornar una array vacío.

+ Si no hay ninguna propiedad en dicha key, debería retornar una array vacío.

