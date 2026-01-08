# `100` getEvenLengthWordsAtProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getEvenLengthWordsAtProperty`. Dados un objeto y una key, `getEvenLengthWordsAtProperty` retorna un array que contenga todos los elementos de palabras cuya *length* (longitud) es par, del array localizado en la key dada.

## 📎 Ejemplo:

```js
let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
```

## 💡 Pistas:

- Si el array está vacío, debe retornar un array vacío `[]`.

- Si no contiene ningún elemento cuyo *length* es par, debe retornar un array vacío `[]`.

- Si la propiedad en la key dada no es un array, debe retornar un array vacío `[]`.

- Si no hay propiedad en la key, debe retornar un array vacío `[]`.
