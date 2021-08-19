# `32` addObjectProperty

## 📝 Instrucciones

1. Escribe una función llamada `addObjectProperty`.

Dados dos objetos y una clave, `addObjectProperty` establece una nueva propiedad en el primer objeto en la clave (key) dada. El valor de esa nueva propiedad es todo el segundo objeto.

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