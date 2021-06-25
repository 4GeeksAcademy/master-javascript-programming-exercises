# `149` Object to Array [Part 1]

## 📝 Instrucciones

Escribe una función llamada "getAllKeys" que devuelve un arreglo de todas las keys del objeto de entrada. Ejemplo de entrada:
```Js
{
  name : 'Sam',
  age : 25,
  hasPets : true
}
```
Valor de retorno de la función (salida):
```Js
['name', 'age', 'hasPets']
```
No uses "Object.keys" para resolver este problema.

Ten en cuenta que tu función debe poder manejar cualquier objeto que se le pase.

Por ejemplo. También debe manejar una entrada como esta:
```Js
{
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
}
```
Valor de retorno de la función (salida):
```Js
['a', 'number', 'hungry', 'grammyWins']
```