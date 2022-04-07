# `125` getProductOfAllElementsAtProperty

## 📝 Instrucciones:

1. Escriba una funcion llamada `getProductOfAllElementsAtProperty`. Dado un objeto y un key, `getProductOfAllElementsAtProperty` retorna el producto de todos los elementos en el array ubicado en el key.

## Ejemplo:

```Js
var obj = {
  key: [1, 2, 3, 4]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
```

## 💡 Pistas:

+ Si al array está vacío, debería retornar 0.

+ Si la propiedad en el key dado no es un array, debería retronar 0.

+ Si no hay ninguna propiedad en el key, debería retonar 0.