# `071` removeStringValuesLongerThan

## 📝 Instrucciones:

1. Escribe una función llamada `removeStringValuesLongerThan`. Dado un número y un objeto, `removeStringValuesLongerThan` elimina cualquier propiedad en el objeto dado cuyos valores son strings más largas que el número dado.

## 📎 Ejemplo:

```Javascript
let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
```

## 💡 Pista:

+ Intenta usar el bucle `for...in`, aquí hay un link con una breve explicación: https://www.w3schools.com/js/js_loop_forin.asp
