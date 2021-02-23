# `109` getLargestElementAtProperty

## 📝 Instrucciones

Escribe una función llamada "getLargestElementAtProperty".

Dado un Objeto y un Key, "getLargestElementAtProperty" retorna El elemento más grande en el arreglo ubicado en el Key.

 
Notas:
* Si el arreglo está vacío, debería retornar un arreglo vacío.
* Si la propiedad en el Key dado no es un arreglo, retorna un arreglo vacío.
* Si no hay ninguna propiedad en el Key, debería retronar un arreglo vacío.

```Js
var obj = {
  key: [1, 2, 4]
};
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
```