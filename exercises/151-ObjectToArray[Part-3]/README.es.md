# `151` Object to Array [Part 3]

## 📝 Instrucciones

Escribe una función llamada "convertObjectToList" la cual convierte un objeto literal en un arreglo(array) de arreglos, como este: 

Argumento:
```Js
{
  name: 'Holly',
  age: 35,
  role: 'producer'
}
```
Valor Retornado:
```Js
[['name', 'Holly'], ['age', 35], ['role', 'producer']]
```
Tenga en cuenta que su función debería poder manejar CUALQUIER objeto como este, no solo la muestra exacta proporcionada anteriormente.

Por ejemplo, también debería poder manejar este, o cualquier otro objeto que contenga simples pares key-value.
```Js
{
  species: 'canine',
  name: 'Bowser',
  weight: 45
}
```