# `68` extend

## 📝 Instrucciones

Escribe una función llamada "extend".

Dados dos objetos, "extend" añade propiedades del segundo objeto al primero.

Notas:
* Añade cualquier key que no esté en el primer objeto.
* Si el primer objeto ya tiene la key dada, ignóralo (no sobre escribas el valor de la propiedad).
* No modifiques para nada el segundo objeto.

```Javascript
var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};


extend(obj1, obj2);


console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}
```