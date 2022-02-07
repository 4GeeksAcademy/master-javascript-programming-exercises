# `159.2` FashionInventory-B
 
NO pegues el código de antes. Afronta cada problema por su cuenta. 

Es la misma estructura de datos de inventario que antes:  

Tienes un catálogo de moda llamado  `currentInventory` que corresponde a un inventario de artículos de varios diseñadores de alta costura. 

 Cada diseñador tiene una línea de zapatos y cada zapato tiene un nombre y un precio.

## 📝 Instrucciones:

1. Escribe una función llamada `renderInventory` que tenga como argumento esta matriz `currentInventory`. Ahora debe retornar el costo promedio de todos los zapatos por diseñador en este formato:

## Example input:

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
## Expected output:

```Js
var expected = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};
```

## 💡 Pista:

+ Puedes usar variables auxiliares.

+ Podrìas usar loops anidados.

