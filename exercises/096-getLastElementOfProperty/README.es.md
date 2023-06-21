# `096` getLastElementOfProperty

## 📝 Instrucciones: 

1. Escribe una función llamada `getLastElementOfProperty`. Dados un objeto y una key, `getLastElementOfProperty` retorna el último elemento de un array en dicha key.

## 📎 Ejemplo:

```js
let obj = {
  key: [1, 2, 5]
};
let output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5
```

## 💡 Pistas:

+ Si el array está vacío, debería retornar `undefined`.

+ Si la propiedad en la key dada no es un array, debería retornar `undefined`.

+ Si la key no tiene propiedad, debería retornar `undefined`.
