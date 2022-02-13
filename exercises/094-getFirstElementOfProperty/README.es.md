# `094` getFirstElementOfProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getFirstElementOfProperty`. Dado un objeto y una key, `getFirstElementOfProperty` retorna el elemento de un array ubicado la key dada.
 
## Ejemplo:

```js 
var obj = {
  key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1
```

## 💡 Pistas:

+ Si el array está vacío, debería retornar `undefined`.

+ Si el propiedad en la key dada no es un array, debería retornar `undefined`.

+ Si la key no tiene propiedad, debería retornar `undefined`.
