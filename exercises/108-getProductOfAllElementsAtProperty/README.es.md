# `108` getProductOfAllElementsAtProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getProductOfAllElementsAtProperty`. Dados un objeto y una key, `getProductOfAllElementsAtProperty` retorna el producto de todos los elementos en el array ubicado en la key.

## 📎 Ejemplo:

```Js
let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
```

## 💡 Pistas:

+ Si el array está vacío, debería retornar `0`.

+ Si la propiedad en la key dada no es un array, debería retornar `0`.

+ Si no hay ninguna propiedad en la key, debería retornar `0`.
