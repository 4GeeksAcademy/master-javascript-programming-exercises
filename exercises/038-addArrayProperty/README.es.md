# `037` addArrayProperty

## 📝 Instrucciones:

1. Escribe una función llamada `addArrayProperty`.
      + `addArrayProperty` recibe un objeto, un string que representa la key y un array.
      + `addArrayProperty` establece una nueva propiedad en el objeto con la key dada, cuyo valor debe ser el array dado.

## 📎 Ejemplo:

```Javascript
let myObj = {};
let myArray = [1, 3];
console.log(myObj); // --> {}
addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty); // --> [1, 3]
```
