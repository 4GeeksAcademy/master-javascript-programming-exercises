# `159.2` FashionInventory-B

## 📝 Instrucciones

DO NOT paste the code from before. Tackle each problem on your own. 

It's the same inventory data structure as before. 

You have a fashion catalog, an inventory `currentInventory` with items from various high-fashion designers. 

Each designer has a lineup of shoes. Each shoe has a name and price an it look like this:

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

1. Write a function called `renderInventory` that will take in this `CurrentInventory` array as its argument. Your function should now return the average cost of all shoes per designer in this format:

```js
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

## 💡 Hint:

+ You may use auxiliary variables

+ You may use nested loops..



