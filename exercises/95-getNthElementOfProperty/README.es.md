# `95` getNthElementOfProperty 

## 📝 Instrucciones

Escribe una función llamada "getNthElementOfProperty".

Dado un objeto y una key, "getNthElementOfProperty" retorna el elemento nth de un array ubicado en la key dada.

Notas:

* Si el array está vacío, debería retornar undefined.
* Si n está fuera de rango, debería retornar undefined.
* Si el propiedad en la key dada no es un array, debería retornar undefined.
* Si la key no tiene propiedad, debería retornar undefined.

```js
var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2
```