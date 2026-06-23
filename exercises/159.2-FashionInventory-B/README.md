# `159.2` FashionInventory-B

It's the same inventory data structure as before, you have a fashion catalog, an inventory `currentInventory` with items from various high-fashion designers. Each designer has a lineup of shoes, and each shoe has a name and price.

## 📝 Instructions:

1. Write a function called `renderAverageCostPerDesigner` that will take in as parameter an array like `currentInventory`. Your function should now return the average cost of all shoes by designer in this format:

```Js
[
    {
      name: 'Designer Name',
      averagePrice: 000
    },
    {
      name: 'Designer Name',
      averagePrice: 000
    },
    ...
]
```

## 📎 Example input:

```Js
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
    {
      name: 'Brunello Cucinelli',
      averagePrice: 1025
    },
    {
      name: 'Gucci',
      averagePrice: 850
    }
]
```

## 💡 Hints:

+ DO NOT paste the code from before. Tackle each problem on your own. 

+ You may use auxiliary variables

+ You may use nested loops.
