# `127` getSumOfAllElementsAtProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getSumOfAllElementsAtProperty`.

Dado un objeto y un key, `getSumOfAllElementsAtProperty` retorna la suma de todos los elementos en el arreglo ubicado en el key dado.

## :bulb: Pista:

* Si el arreglo está vacío, deberá retornar `0`.

* Si la propiedad en el key dada no es un arreglo, debería retornar `0`.

* Si no hay ninguna propiedad en el key, debería retornar `0`.

```Js
var obj = {
  key: [4, 1, 8]
};
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
```