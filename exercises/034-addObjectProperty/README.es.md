# `033` addObjectProperty

## 📝 Instrucciones:

1. Escribe una función llamada `addObjectProperty`. Esta función toma dos objetos y una clave (key) como argumentos.
2. La función `addObjectProperty` debe establecer una nueva propiedad en el primer objeto utilizando la clave (key) proporcionada. El valor de esta nueva propiedad debe ser el segundo objeto.
3. La función `addObjectProperty` debe devolver el primer objeto modificado con la nueva propiedad.


## 📎 Ejemplo:

```Javascript
let person1 = {
  name: 'Joe Blow',
  role: 'schlub'
};
let person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};
addObjectProperty(person1, 'manager', person2);
console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }
```
