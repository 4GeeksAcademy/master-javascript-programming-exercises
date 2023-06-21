# `103` getSquaredElementsAtProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getSquaredElementsAtProperty`. Dados un objeto y una key, `getSquaredElementsAtProperty` retorna un array que contenga todos los elementos al cuadrado del array, localizados en la key dada. 

## 📎 Ejemplo:

```Js
let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
```

## 💡 Pistas:

+ Si el array está vacío, debe retornar un array vacío `[]`.

+ Si la propiedad en la key dada no es un array, debe retornar un array vacío `[]`.

+ Si no hay propiedad en la key, debe retornar un array vacío `[]`.
