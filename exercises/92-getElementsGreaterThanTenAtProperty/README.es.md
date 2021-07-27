# `92` getElementsGreaterThan10AtProperty

## 📝 Instrucciones:

Escribe una función llamada `getElementsGreaterThan10AtProperty`.

Dado un objeto y una llave, `getElementsGreaterThan10AtProperty` retorna un array que contiene los elementos del array ubicado en esa key que sean mayores a 10.

```js
var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]
```
 
## :bulb: Pista:

+ Si el array está vacío, debería retornar un array vacío.

+ Si el array no contiene ningún elemento mayor a 10, debería retornar una array vacío.

+ Si la propiedad en esa key dada no es un array, debería retornar una array vacío.

+ Si no hay ninguna propiedad en dicha key, debería retornar una array vacío.


