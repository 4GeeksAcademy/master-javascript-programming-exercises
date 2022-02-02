# `111` getElementOfArrayProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getElementOfArrayProperty`.

La función `getElementOfArrayProperty` recive tres parámetros, `(obj , key , index)`, esta función retorna el valor de un elemento del array que se encuentra en la propiedad (`key`) del objeto dado (`obj`) a través de su índice (`index`)

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

* En el ejemplo anterior estamos diciendo que queremos saber el valor que contiéne el `index` 0 en la propiedad llamada `key`, propiedad que se encuentra dentro del objeto `obj`