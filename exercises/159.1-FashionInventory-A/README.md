# `159.1` FashionInventory-A

## 📝 Instructions:

1. You have a fashion catalog, an inventory of items from various high-fashion designers.

Each designer has a lineup of shoes. Each shoe has a name and a price.

It looks like this:
 
```js
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

Write a function that will take in this `CurrentInventory` array as its argument. Your function should access all the shoes across each designer and return them out in a flat list with this order:

```js
[designer name, shoe name, price]
```

## Example output:

```Js
[
  [Brunello Cucinelli, tasselled black low-top lace-up, 1000],
  [Brunello Cucinelli, tasselled green low-top lace-up, 1100],
  ...
]
```

## 💡 Hint

+ You should probably use nested loops.

+ The return value is a Matrix (an array with arrays inside of it).
