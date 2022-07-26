# `098` getOddLengthWordsAtProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getOddLengthWordsAtProperty`. Dado un objeto y una key, `getOddLengthWordsAtProperty` retorna un array que contiene todo los elementos de dicho array ubicados en esa key que corresponden a palabras con una cantidad de letras impar.

## Ejemplo:

```js
let obj = {
  key: ['It', 'has', 'some', 'words']
};
let output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']
```

## 💡 Pistas:

+ Si el array está vacío, debería retornar un array vacío.

+ Si el array no contiene ningún elemento que corresponda a una palabr con una cantidad de letras impar, debería retornar una array vacío.

+ Si la propiedad en esa key dada no es un array, debería retornar una array vacío.

+ Si no hay ninguna propiedad en dicha key, debería retornar una array vacío.

