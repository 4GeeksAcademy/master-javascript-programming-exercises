# `96` getLastElementOfProperty

## 📝 Instrucciones: 

1. Escribe una función llamada `getLastElementOfProperty`.

Dado un objeto y una key, `getLastElementOfProperty` retorna el último elemento de un array ubicado en dicha key.
```js
var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5
```
## :bulb: Pista:

+ Si el array está vacío, debería retornar `undefined`.

+ Si el propiedad en la key dada no es un array, debería retornar `undefined`.

+ Si la key no 
tiene propiedad, debería retornar `undefined`.

