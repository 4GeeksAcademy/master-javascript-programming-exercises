# `103` getAverageOfElementsAtProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getAverageOfElementsAtProperty`. Dado un objeto y una key, `getAverageOfElementsAtProperty` retorna el promedio (average) de todos los elementos del array localizados en la key dada. 

## 📎 Ejemplo: 

```js
let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  
```

## 💡 Pistas:

+ Si el array en la key dada está vacío, debería retornar `0`.

+ Si la propiedad en la key dada no es un array, debería retornar `0`.

+ Si no hay propiedad en la key dada, debería retornar `0`.
