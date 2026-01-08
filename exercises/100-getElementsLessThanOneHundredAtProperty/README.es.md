# `100` getElementsLessThan100AtProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getElementsLessThan100AtProperty`. Dados un objeto y una key, `getElementsLessThan100AtProperty` retorna un array que contiene todos los elementos del array ubicado en esa key que sean menores a 100.

## 📎 Ejemplo:

```js
let obj = {
  key: [1000, 20, 50, 500]
};
let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]
```

## 💡 Pistas:

+ Si el array está vacío, debería retornar un array vacío `[]`.

+ Si el array no contiene ningún elemento menor a 100, debería retornar un array vacío `[]`.

+ Si la propiedad en esa key dada no es un array, debería retornar un array vacío `[]`.

+ Si no hay ninguna propiedad en dicha key, debería retornar un array vacío `[]`.
