# `100` getAverageOfElementsAtProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getAverageOfElementsAtProperty`.

Dado un objeto y una key, `getAverageOfElementsAtProperty` regresa el promedio (`average`) de todos los elementos del array localizados en la key dada. 

## :bulb: Pista:

* Si el array en la key dada está vacío, debe regresar `0`.

* Si la propiedad en la key dada no es un array, debe regresar `0`.

* Si no hay propiedad en la key dada, debe regresar `0`.

```js
var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  
```