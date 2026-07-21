# `105` getOddElementsAtProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getOddElementsAtProperty`. Dados un objeto y una key, `getOddElementsAtProperty` retorna un array que contenga todos los elementos impares del array localizados en la key dada. 

## 📎 Ejemplo:

```Js
let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
```

## 💡 Pistas:

+ Si el array está vacío, debe retornar un array vacío `[]`.

+ Si no contiene ningún elemento impar, debe retornar un array vacío `[]`.

+ Si la propiedad en la key dada no es un array, debe retornar un array vacío `[]`.

+ Si no hay propiedad en la key, debe retornar un array vacío `[]`.
