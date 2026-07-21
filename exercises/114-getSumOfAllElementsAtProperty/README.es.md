# `114` getSumOfAllElementsAtProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getSumOfAllElementsAtProperty`. Dados un objeto y una key, `getSumOfAllElementsAtProperty` retorna la suma de todos los elementos en el array ubicado en la key dada.

## 📎 Ejemplo:

```Js
let obj = {
  key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
```

## 💡 Pistas:

+ Si el array está vacío, deberá retornar `0`.

+ Si la propiedad en la key dada no es un array, debería retornar `0`.

+ Si no hay ninguna propiedad en la key, debería retornar `0`.
