# `111` getElementOfArrayProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getElementOfArrayProperty`.

Dado un Objeto, un Key y un index númerico, `getElementOfArrayProperty` retorna el valor de un elemento en el index proporcionado del arreglo localizado dentro del Objeto en la key dada.

un elemento en el index proporcionado del arreglo localizado dentro del Objeto en la key dada
## :bulb: Pista:

* Si el arreglo está vacío, debería retornar `undefined`.

* Si el index otorgado está fuera del rango del arreglo localizado en el Key, debería retornar `undefined`.

* Si la propiedad en el Key dado no es un arreglo, debería retornar `undefined`.

* Si no hay ninguna propiedad en el Key, debería retornar `undefined`.

```Js
var obj = {
 key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
```
