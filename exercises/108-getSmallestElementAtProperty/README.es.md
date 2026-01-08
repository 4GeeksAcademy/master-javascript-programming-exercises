# `104` getSmallestElementAtProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getSmallestElementAtProperty`. Dados un objeto y una key, `getSmallestElementAtProperty` retorna el elemento más pequeño del array ubicado en dicha key.

 ## 📎 Ejemplo:

```Js
let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
```

## 💡 Pistas:

+ Si el array está vacío, debería retornar un array vacío `[]`.

+ Si la propiedad en la key dada no es un array, debería retornar un array vacío `[]`.

+ Si no hay ninguna propiedad en la key, debería retornar un array vacío `[]`.
