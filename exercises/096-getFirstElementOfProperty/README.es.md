# `096` getFirstElementOfProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getFirstElementOfProperty`. Dados un objeto y una key, `getFirstElementOfProperty` retorna el primer elemento de un array ubicado en la key dada.
 
## 📎 Ejemplo:

```js 
let obj = {
  key: [1, 2, 4]
};
let output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1
```

## 💡 Pistas:

+ Si el array está vacío, debería retornar `undefined`.

+ Si la propiedad en la key dada no es un array, debería retornar `undefined`.

+ Si la key no tiene propiedad, debería retornar `undefined`.
