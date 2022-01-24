# `109` getLargestElementAtProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getLargestElementAtProperty`.

Dado un Objeto y un Key, `getLargestElementAtProperty` retorna el elemento más grande en el arreglo ubicado en el Key.

## 💡 Pista:

* Si el arreglo está vacío, debería retornar un arreglo vacío `[]`.

* Si la propiedad en el Key dado no es un arreglo, debería retornar un arreglo vacío `[]`.

* Si no hay ninguna propiedad en el Key, debería retornar un arreglo vacío `[]`.

## Resultado esperado:

```Js
var obj = {
  key: [1, 2, 4]
};
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
```