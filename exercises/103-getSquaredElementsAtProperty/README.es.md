# `103` getSquaredElementsAtProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getSquaredElementsAtProperty`. Dado un objeto y una key, `getSquaredElementsAtProperty` regresa un array que contenga todos los elementos al cuadrado del array, localizados en la key dada. 

## Ejemplo:

```Js
var obj = {
  key: [2, 1, 5]
};
var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
```

## 💡 Pistas:

+ Si el array está vacío, debe regresar un array vacío.

+ Si la propiedad en la key dada no es un array, debe regresar un array vacío.

+ Si no hay propiedad en la key, debe regresar un array vacío.