# `159.3` FashionInventory-C

## 📝 Instrucciones

Esta es una variación del problema del "Fashion Inventory".

Sin embargo, NO pegues el código de antes. Afronta cada problema por su cuenta.
Es la misma estructura de datos de inventario que antes: 


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

 1. Ahora encuentra todos los zapatos negros( con el name `black`). Es el mismo resultado que la parte 1, pero se filtran solo los nombres de zapatos que contienen "negro" en ellos. 
 
```Js
[
   [Brunello Cucinelli,tasselled black low-top lace-up,1000],
   [Gucci,black leather laced sneakers,900]
]
```

## 💡 Pista:

+ Crea funciones auxiliares si es necesario.

+ El resultado es una matriz.