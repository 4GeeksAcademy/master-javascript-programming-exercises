# `110` getElementOfArrayProperty

## 📝 Instrucciones

Escribe una función llamada"getElementOfArrayProperty".

Dado un Objeto, un Key y un Index númerico, "getElementOfArrayProperty" retorna el valor de un elemento en el index proporcionado del arreglo localizado dentro del Objeto en la Key dada.

Notas:
* Si el arreglo está vacío, debería retornar indefinida.
* Si el index otorgado está fuera del rango del arreglo localizado en el Key, debería retornar indefinido.
* Si la propiedad en el Key dado no es un arreglo, debería retornar indefinido.
* Si no hay ninguna propiedad en el Key, debería retornar indefinido.

```Js
var obj = {
 key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
```