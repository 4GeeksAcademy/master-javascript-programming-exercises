# `80` getAverageOfElementsAtProperty

## 📝 Instrucciones

Escribe una función llamada "getAverageOfElementsAtProperty".

Dado un objeto y una key, "getAverageOfElementsAtProperty", retorna el promedio de todos los elementos en el array ubicado en esa key.

Notas:
* Si el array en esa key está vacío, debería retornar 0.
* Si la propiedad en esa key no es un array, debería retornar 0.
* Si no hay ninguna propiedad en esa key, debería retornar 0.

```js
var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2
```