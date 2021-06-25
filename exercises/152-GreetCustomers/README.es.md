# `152` Greet Customers

## 📝 Instrucciones

Escribe una función llamada "greetCustomer".

Dado un nombre, "greetCustomer" devuelve un saludo en función de cuántas veces ese cliente ha visitado el restaurante. Consulte el objeto customerData.

El saludo debe ser diferente, dependiendo del nombre en su reserva.

Case 1 - Cliente desconocido (El nombre no se encuentra en el customerData ):
```Js
var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'
```
Case 2 - Cliente que ha visitado solo una vez (el valor de 'visits' es 1):
```Js
var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
```
Case 3 - Cliente repetido: (el valor de 'visits' es mayor que 1):
```Js
var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
```
Notas:
* Su función no debe alterar el objeto customerData para actualizar el número de visitas.
* No programes con los datos de muestra exactos. Esta es una MALA IDEA:
```Js
if (firstName === 'Joe') {
  // do something
}
```