# `146.3` ArraytoObject

## 📝 Instrucciones:

1. Escribe una función llamada `transformEmployeeData` que transforma algunos datos de los empleados de un formato a otro.

## Ejemplo:

```js
let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); // [{firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'}, {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}]
```

## 💡 Pista:

+ Ten en cuenta que la entrada puede tener una cantidad diferente de filas o keys a las del ejemplo. Por ejemplo, supongamos que el departamento de recursos humanos agrega un campo `tshirtSize` a cada registro de empleado. Tu código debe ser flexible y adaptarse.
