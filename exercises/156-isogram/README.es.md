# `156` isIsogram

## 📝 Instrucciones:

1. La función `isIsogram` recibe un string y retorna `true` si el string es un isograma, si no retorna `false`.

## 📎 Ejemplo:

```js
console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false
```

## 💡 Pistas:

+ Un **isograma** es una palabra que no tiene letras repetidas, consecutivas o no consecutivas.

+ Supón que tu string de entrada solo tiene letras (sin espacios).

+ Supón que un string vacío es un isograma.

+ Ignora mayúsculas y minúsculas.

+ Puedes empezar añadiendo cada caracter a un `new Set()` https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set
