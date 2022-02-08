# `159-4` FashionInventory-D

Esta es una variación del problema del "Fashion Inventory".  

Sin embargo, NO pegues el código de antes. Afronta cada problema por su cuenta.

Es la misma estructura de datos de inventario que antes.

La tarea ahora es encontrar todos los zapatos con cordones "laced". Escriba los nombres de los zapatos que contengan "lace" e indique qué palabra contiene "lace". 

## 📝 Instrucciones

1. Completa la función `getLaceNameDataForShoes` para que retorne el resultado esperado.

2. La función recorre los objetos del `inventory` enfocándose en su propiedad `shoes`, verificando si en el `name` de los zapatos contiene cordones `lace`, esto tambien incluye `laced`.

3. Luego retorna una lista de objetos con la propiedad `nameWords` cuyo valor será una lista con las palabras del nombre del zapato que incluye `lace` / `laced`. Este objeto tiene también una propiedad llamada `targetWordIndex` en la cual se muestra el índice en el cual se encuentra la palabra `lace` / `laced`.

## Ejemplo de Entrada:

```js
var inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];
```
## Ejemplo de Salida:

```js
[
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
]
```
## 💡 Pista

Ayúdate con la información de esta página para obtener palabras de un string según espacios `" "`, comas `,` , etc.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split



