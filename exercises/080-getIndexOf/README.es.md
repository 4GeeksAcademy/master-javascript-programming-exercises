# `080` getIndexOf

## 📝 Instrucciones: 

1. Escribe una función llamada `getIndexOf`. Dado un caracter y un string, `getIndexOf` retorna la primera posición de dicho caracter en dicho string.

## 📎 Ejemplo:

```js
let output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2
```

## 💡 Pistas:

+ El índice de los strings parte desde el 0, esto significa que el primer caracter en un string está en la posición 0.

+ Cuando un string tiene un caracter que se repite, debería retornar el índice de su primera ocurrencia.

+ Si el caracter no existe en el string, debería retornar `-1`.

+ No uses el método `indexOf()` en tu implementación.
