# `092` getElementsGreaterThan10AtProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getElementsGreaterThan10AtProperty`. Dados un objeto y una key, `getElementsGreaterThan10AtProperty` retorna un array que contiene los elementos del array ubicado en esa key que sean mayores a 10.

## 📎 Ejemplo:

```js
let obj = {
  key: [1, 20, 30]
};
let output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]
```

## 💡 Pistas:

+ Si el array está vacío, debería retornar un array vacío.

+ Si el array no contiene ningún elemento mayor a 10, debería retornar un array vacío.

+ Si la propiedad en esa key dada no es un array, debería retornar un array vacío.

+ Si no hay ninguna propiedad en dicha key, debería retornar un array vacío.
