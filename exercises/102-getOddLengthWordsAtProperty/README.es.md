# `102` getOddLengthWordsAtProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getOddLengthWordsAtProperty`. Dados un objeto y una key, `getOddLengthWordsAtProperty` retorna un array que contiene todos los elementos de dicho array ubicados en esa key que corresponden a palabras con una cantidad de letras impar.

## 📎 Ejemplo:

```js
let obj = {
  key: ['It', 'has', 'some', 'words']
};
let output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']
```

## 💡 Pistas:

+ Si el array está vacío, debería retornar un array vacío `[]`.

+ Si el array no contiene ninguna palabra impar, debería retornar un array vacío `[]`.

+ Si la propiedad en esa key dada no es un array, debería retornar un array vacío `[]`.

+ Si no hay ninguna propiedad en dicha key, debería retornar un array vacío `[]`.

