# `005` getProperty

## 📝 Instrucciones:

1. Escribe una función llamada `getProperty`. Dado un objeto y una key, `getProperty` retorna el valor de la propiedad con esa key.

## Ejemplo:

```Javascript
var car = {
  model: 'Toyota'
};
var output = getProperty(car, 'model');
console.log(output); // --> 'Toyota'
```

## 💡 Pista:

+ Si no hay una propiedad en esa key, debería retornar `undefined`.
