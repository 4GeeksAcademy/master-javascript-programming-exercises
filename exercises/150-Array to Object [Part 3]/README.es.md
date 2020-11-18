# `150` Array to Object [Part 3]

## 📝 Instrucciones

Escribe una función llamada "transformEmployeeData" que transforma algunos datos de los empleados de un formato a otro.

El argumento se verá más o menos así:
```JS
[
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]
```
Dada esa entrada, el valor de retorno debería verse así:
```Js
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]
```
Ten en cuenta que la entrada puede tener un número diferente de filas o claves diferentes que la muestra dada.

Por ejemplo, supongamos que el departamento de recursos humanos agrega un campo "tshirtSize" a cada registro de empleado. Tu código debe acomodar eso flexiblemente.