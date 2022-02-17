# `146.1` ArrayToObject

## 📝 Instrucciones:

1. Escribe una función `transformFirstAndLast` que tome un array y devuelva un objeto *cuyo primer elemento sea la key del objeto*, y

cuyo *último elemento sea el valor de esa key*.

 ## Ejemplo de entrada 1:

 ```Js
['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
```

## Ejemplo de salida 1:

```Js
{
  Queen : 'Beyonce'
}
``` 

### Ejemplo de entrada 2:

```js
['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']
```

### Ejemplo de salida 2:

```Js
{
  Kevin : 'Spacey'
}
```

## 💡 Pistas:

+ No cambies el array de entrada. 

+ Supón que todos los elementos en el array de entrada serán del tipo `string`.

+ Ten en cuenta que el array de entrada puede tener un número variable de elementos. Tu código debe ser flexible.