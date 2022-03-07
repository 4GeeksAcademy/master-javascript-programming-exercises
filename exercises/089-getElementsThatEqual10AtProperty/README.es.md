# `089` getElementsThatEqual10AtProperty

## 📝 Instrucciones

1. Escribe una función llamada `getElementsThatEqual10AtProperty`. Dado un objeto y una key, `getElementsThatEqual10AtProperty` retorna un array que contiene todos los elementos de un array ubicado en la key dada que sean iguales a 10.

## Ejemplo:

```js
var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]
```
## 💡 Pistas:

+ Si el array está vacío, debería retornar un array vacío.

+ Si el array no contiene ningún elemento igual a 10, debería retornar una array vacío.

+ Si la propiedad en esa key dada no es un array, debería retornar una array vacío.

+ Si no hay ninguna propiedad en dicha key, debería retornar una array vacío.
