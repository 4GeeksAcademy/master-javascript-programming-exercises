# `109` getLargestElementAtProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getLargestElementAtProperty`. Dado un Objeto y un Key, `getLargestElementAtProperty` retorna el elemento más grande en el array ubicado en el Key.

## Ejemplo:

```Js
let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
```
## 💡 Pistas:

+ Si el array está vacío, debería retornar un array vacío `[]`.

+ Si la propiedad en el Key dado no es un array, debería retornar un array vacío `[]`.

+ Si no hay ninguna propiedad en el Key, debería retornar un array vacío `[]`.