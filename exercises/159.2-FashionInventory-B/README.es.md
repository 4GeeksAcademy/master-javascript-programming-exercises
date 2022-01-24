# `159.2` FashionInventory-B

## 📝 Instrucciones

Esta es una variación del problema del "Fashion Inventory". 

Sin embargo, NO pegues el código de antes. Afronta cada problema por su cuenta. 

Es la misma estructura de datos de inventario que antes:  

```Js
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

Ahora muestra el costo promedio de todos los zapatos por diseñador en este formato.

## Ejemplo de salida:

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

+ Puedes usar funciones auxiliares.

