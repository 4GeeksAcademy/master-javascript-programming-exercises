# `163` Fashion Inventory A

## 📝 Instrucciones

Tienes un catálogo de moda, un inventario de artículos de varios diseñadores de alta costura. Cada diseñador tiene una línea de zapatos. Cada zapato tiene un nombre y un precio.

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
 Busca todos los zapatos en todos los diseñadores y listalos en un arreglo de arreglos con este formato: 
```Js
[[nombre diseñador, nombre zapato, precio], [nombre diseñador, nombre zapato, precio], ....]
```
Ejemplo
```Js
[
  [Brunello Cucinelli, tasselled black low-top lace-up, 1000],
  [Brunello Cucinelli, tasselled green low-top lace-up, 1100],
...
]
```