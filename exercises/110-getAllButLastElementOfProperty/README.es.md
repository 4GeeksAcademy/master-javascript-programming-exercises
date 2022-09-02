# `110` getAllButLastElementOfProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getAllButLastElementOfProperty`. Dado un objeto y un key `getAllButLastElementOfProperty` retorna un array que contenga todos menos el último elemento del array ubicado en el Key dado.

## Ejemplo:

```Js
let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]
```

## 💡 Pistas:

+ Si el array está vacío, debería retornar un array vacío.

+ Si la propiedad en el Key dado no es un array, retorna un array vacío.

+ Si no hay ninguna propiedad en el Key, debería retornar un array vacío.