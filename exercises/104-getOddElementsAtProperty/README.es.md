# `104` getOddElementsAtProperty

## 📝 Instrucciones

Escribe una función llamada "getOddElementsAtProperty".

Dado un objeto y una key, "getOddElementsAtProperty" regresa un array que contenga todos los elementos impares del array localizados en la key dada. 

Notas:
* Si el array está vacío, debe regresar un array vacío.
* Si no contiene ningún elemento impar, debe regresar un array vacío.
* Si la propiedad en la key dada no es un array, debe regresar un array vacío.
* Si no hay propiedad en la key, debe regresar un array vacío.

```Js
var obj = {
  key: [1, 2, 3, 4, 5]
};
var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
```