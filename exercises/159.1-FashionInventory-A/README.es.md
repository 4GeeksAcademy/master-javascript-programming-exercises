# `159.1` FashionInventory-A

Tienes un catálogo de moda llamado  `currentInventory` que corresponde a un inventario de artículos de varios diseñadores de alta costura. 
 Cada diseñador tiene una línea de zapatos y cada zapato tiene un nombre y un precio.

## 📝 Instrucciones:

1. Escribe una función llamada `renderInventory` que recibe como parámetro un array como `currentInventory`. La función debe retornar una matriz (array de arrays) con todos los zapatos de cada diseñador en este orden:

```js
[
  [designer name, shoe name, price],
  [designer name, shoe name, price]
  ...
]  
```

## Ejemplo de entrada:

```Js
var currentInventory = [
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

## Ejemplo de salida:

```Js
[
  [Brunello Cucinelli, tasselled black low-top lace-up, 1000],
  [Brunello Cucinelli, tasselled green low-top lace-up, 1100],
  ...
]
```

## 💡 Pistas:

+ Deberías usar loops anidados.

+ El valor retornado debe ser una matriz (array dentro de un array).
