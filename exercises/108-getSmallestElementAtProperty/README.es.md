# `108` getSmallestElementAtProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getSmallestElementAtProperty`. Dado un objeto y una key, `getSmallestElementAtProperty` retorna el elemento maás pequeño del array ubicado en dicha key.

 ## Ejemplo:

```Js
var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
```

## 💡 Pistas:

+ Si el array está vacío, debería retornar un array vacío `[]`.

+ Si la propiedad en el Key dado no es un array, debería retornar un array vacío `[]`.

+ Si no hay ninguna propiedad en el Key, debería retronar un array vacío `[]`.
