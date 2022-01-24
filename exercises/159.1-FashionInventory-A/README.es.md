# `159.1` FashionInventory-A

## 📝 Instrucciones:

 Tienes un catálogo de moda llamado  `currentInventory` que corresponde a un inventario de artículos de varios diseñadores de alta costura. 
 
 Cada diseñador tiene una línea de zapatos y cada zapato tiene un nombre y un precio y tiene este formato:


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
 
1. Escribe una función llamada `renderInventory` que tenga como argumento esta matriz `currentInventory`. función debe acceder a todos los zapatos de cada diseñador con este orden:

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