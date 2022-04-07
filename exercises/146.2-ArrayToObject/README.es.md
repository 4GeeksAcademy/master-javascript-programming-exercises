# `146.2` ArraytoObject

## 📝 Instrucciones:

1. Escribe una función `fromListToObject` que, tome una matriz (array de arrays) y retorne *un objeto con cada par de elementos de la matriz como un par clave-valor (key-value)*.

## Ejemplo:

```js
let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]);
console.log(output); // {make : 'Ford', model : 'Mustang', year : 1964}
```

## 💡 Pistas:

+ No cambies el string de entrada. 

+ Asume que todos los elementos del array serán de tipo `string`.

+ Ten en cuenta que la entrada puede tener una cantidad de elementos puede variar. Por ejemplo, si la entrada tenía 6 valores en lugar de 4, tu código debe ser capaz de adaptarse.
