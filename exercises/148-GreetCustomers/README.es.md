# `148` GreetCustomers

## 📝 Instrucciones:

1. Escribe una función llamada `greetCustomer`. Dado un nombre, `greetCustomer` retorna un saludo en función de cuántas veces ese cliente ha visitado el restaurante. Estudia el objeto `customerData`. 

2. El saludo debe ser diferente, dependiendo del nombre de la reserva del cliente:

+ 📎 Caso 1 - Cliente desconocido (El nombre no se encuentra en el `customerData`):

```Js
let output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'
```

+ 📎 Caso 2 - Cliente que ha visitado solo una vez (el valor de `visits` es `1`):

```Js
let output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
```

+ 📎 Caso 3 - Cliente repetido (el valor de `visits` es mayor que `1`):

```Js
let output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
```

## 💡 Pistas:

+ Su función no debe alterar el objeto `customerData` para actualizar el número de visitas.

+ No programes con los datos de muestra exactos. Es una MALA IDEA 😩.
