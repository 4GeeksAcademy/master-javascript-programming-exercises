# `108` getSmallestElementAtProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getSmallestElementAtProperty`.

Dado un Objeto y un Key, `getSmallestElementAtProperty` retorna El elemento más pequeño del arreglo ubicado en el Key. 
 
## :bulb: Pista:

* Si el arreglo está vacío, debería retornar un arreglo vacío.

* Si la propiedad en el Key dado no es un arreglo, retorna un arreglo vacío.

* Si no hay ninguna propiedad en el Key, debería retronar un arreglo vacío.

```Js
var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
```