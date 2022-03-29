# `127` getSumOfAllElementsAtProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getSumOfAllElementsAtProperty`. Dado un objeto y un key, `getSumOfAllElementsAtProperty` retorna la suma de todos los elementos en el array ubicado en el key dado.

## Ejemplo:

```Js
var obj = {
  key: [4, 1, 8]
};
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
```

## 💡 Pistas:

+ Si el array está vacío, deberá retornar 0.

+ Si la propiedad en el key dada no es un array, debería retornar 0.

+ Si no hay ninguna propiedad en el key, debería retornar 0.
