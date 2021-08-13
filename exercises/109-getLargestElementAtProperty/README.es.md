# `109` getLargestElementAtProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getLargestElementAtProperty`.

Dado un Objeto y un Key, `getLargestElementAtProperty` retorna El elemento más grande en el arreglo ubicado en el Key.

 
## :bulb: Pista:

* Si el arreglo está vacío, debería retornar `undefined`.

* Si la propiedad en el Key dado no es un arreglo, debería retornar `undefined`.

* Si no hay ninguna propiedad en el Key, debería retornar `undefined`.

```Js
var obj = {
  key: [1, 2, 4]
};
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
```