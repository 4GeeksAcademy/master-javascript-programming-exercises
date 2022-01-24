# `159.1` FashionInventory-A

## 📝 Instrucciones:

1. Tienes un catálogo de moda, un inventario de artículos de varios diseñadores de alta costura. Cada diseñador tiene una línea de zapatos. Cada zapato tiene un nombre y un precio.

Se parece a esto: 

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
 BWrite a function that will take in this `CurrentInventory` array as its argument. Your function should access all the shoes across each designer and return them out in a flat list with this order:

```js
[designer name, shoe name, price]
```

## Ejemplo de salida:

```Js
[
  [Brunello Cucinelli, tasselled black low-top lace-up, 1000],
  [Brunello Cucinelli, tasselled green low-top lace-up, 1100],
  ...
]
```

## 💡 Pista:

+ Deberías usar loops anidados.

+ El valor retornado debe ser una matriz (array dentro de un array)