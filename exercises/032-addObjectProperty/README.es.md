# `032` addObjectProperty

## 📝 Instrucciones

1. Escribe una función llamada `addObjectProperty`. Dados dos objetos y una clave (key), `addObjectProperty` establece una nueva propiedad en el primer objeto en la clave (key) dada.

## Ejemplo:

```Javascript
var person1 = {
  name: 'Joe Blow',
  role: 'schlub'
};
var person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};
addObjectProperty(person1, 'manager', person2);
console.log(person1.manager); // --> { name: 'Mr.Burns', role: 'supervisor' }
```

## 💡 Pista:

+ El valor de esa nueva propiedad es todo el segundo objeto.