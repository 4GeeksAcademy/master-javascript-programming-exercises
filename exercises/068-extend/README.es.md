# `068` extend

## 📝 Instrucciones:

1. Escribe una función llamada `extend`. Dados dos objetos, `extend` añade propiedades del segundo objeto al primero.

## Ejemplo:

```Javascript
let obj1 = {
  a: 1,
  b: 2
};
let obj2 = {
  b: 4,
  c: 3
};

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}
```

## 💡 Pistas:

+ Añade cualquier key que no esté en el primer objeto (`obj1`).

+ Si el primer objeto (`obj1`) ya tiene la key dada, ignóralo (no sobre escribas el valor de la propiedad).

+ No modifiques para nada el segundo objeto (`obj2`).