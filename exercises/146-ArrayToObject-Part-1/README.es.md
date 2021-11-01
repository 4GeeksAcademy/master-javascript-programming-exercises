# `146` ArrayToObject[Part-1]

## 📝 Instrucciones:

1. Escribe una función `transformFirstAndLast` que tome un arreglo y devuelva un objeto con:

+  el primer elemento del arreglo como key del objeto, y

+ el último elemento del arreglo como el valor de esa key.

 Ejemplo de entrada:

 ```Js
['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
```

Valor de retorno de la función (salida):

```Js
{
  Queen : 'Beyonce'
}
```

 No cambies el arreglo de entrada. Supón que todos los elementos en el arreglo de entrada serán del tipo `string`.

Ten en cuenta que el arreglo de entrada puede tener un número variable de elementos. Tu código debe acomodar eso flexiblemente.

Por ejemplo, deberías manejar la entrada así:

```js
['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']
```

Valor de retorno de la función (salida):

```Js
{
  Kevin : 'Spacey'
}
```