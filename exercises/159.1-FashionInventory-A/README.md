# `159.1` FashionInventory-A

You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.

## 📝 Instructions:

1. Write a function called `renderInventory` that will receive as a parameter an array like `currentInventory`. Your function should access all the shoes across each designer and return a matrix (array of arrays) like this:

```js
[
   [designer name, shoe name, price],
   [designer name, shoe name, price],
   ...
]
```

## 📎 Example input:
 
```js
let currentInventory = [
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

## 📎 Example output:

```Js
[
  ['Brunello Cucinelli', 'tasselled black low-top lace-up', 1000],
  ['Brunello Cucinelli', 'tasselled green low-top lace-up', 1100],
  ...
]
```

## 💡 Hints:

+ You should probably use nested loops.

+ The return value is a matrix (an array with arrays inside of it).
