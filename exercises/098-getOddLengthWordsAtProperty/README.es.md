# `98` getOddLengthWordsAtProperty

## 📝 Instrucciones

Escribe una función llamada "getOddLengthWordsAtProperty".

Dado un objeto y una key, "getOddLengthWordsAtProperty" retorna un array que contiene todo los elementos de dicho array ubicados en esa key que corresponden a palabras con una cantidad de letras impar.

Notas:

* Si el array está vacío, debería retornar un array vacío.
* Si el array no contiene ningún elemento que corresponda a una palabr con una cantidad de letras impar, debería retornar una array vacío.
* Si la propiedad en esa key dada no es un array, debería retornar una array vacío.
* Si no hay ninguna propiedad en dicha key, debería retornar una array vacío.

```js
var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']
```