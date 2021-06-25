# `110` getAllButLastElementOfProperty

## 📝 Instrucciones

Escribe una función llamada "getAllButLastElementOfProperty".

Dado un Objeto y un Key "getAllButLastElementOfProperty" retorna un arreglo que contenga todos menos el último elemento del arreglo ubicado en el Key dado.

Notas:
* Si el arreglo está vacío, debería retornar un arreglo vacío.
* Si la propiedad en el Key dado no es un arreglo, retorna un arreglo vacío.
* Si no hay ninguna propiedad en el Key, debería retronar un arreglo vacío.

```Js
var obj = {
  key: [1, 2, 3]
};
var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]
```