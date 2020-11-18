# `71` removeStringValuesLongerThan

## 📝 Instrucciones

Escribe una función llamada "removeStringValuesLongerThan".

Dado un número y un objeto, "removeStringValuesLongerThan" elimina cualquier propiedad en el objeto dado cuyos valores son strings más largas que el número dado.

```Javascript
var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
```