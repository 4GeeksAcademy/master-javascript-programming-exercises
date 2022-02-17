# `148` GreetCustomers

## 📝 Instructions:

1. Write a function called `greetCustomer`. Given a name, `greetCustomer` returns a greeting based on how many times that customer has visited the restaurant.  Please refer to the `customerData` object. 

- The greeting should be different, depending on the name on their reservation.

+ Case 1 - Unknown customer (Name is not present in `customerData`): 

```Js
var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'
```

+ Case 2 - Customer who has visited only once ( `visits` value is 1 ):

```Js
var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
```

+ Case 3 - Repeat customer: ( `visits` value is greater than `1`):

```Js
var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
```

## 💡 Hints:

+ Our function should not alter the `customerData` object to update the number of visits.

+ Do not hardcode to the exact sample data. This is a BAD IDEA 😩 :

```Js
if (firstName === 'Joe') {
  // do something
}
```