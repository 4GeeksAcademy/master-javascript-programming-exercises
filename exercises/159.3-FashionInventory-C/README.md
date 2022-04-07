# `159.3` FashionInventory-C


You have a fashion catalog, an `currentInventory` of items from various high fashion designers. Each designer has a lineup of shoes and each shoe has a name and a price.

## 📝 Instructions:

1. Complete the `renderInventory` function to return the expected result.

2. Return a matrix (List contained by lists) these lists will contain the shoes' data that includes the name `black` in it with its respective price. In the following order:

```js
[
  [brandName, shoeModel, price],
  [brandName, shoeModel, price],
  ...
]
```

## Example input: 

```JS
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

 ## Example output:
 
```Js
[
   [Brunello Cucinelli,tasselled black low-top lace-up,1000],
   [Gucci,black leather laced sneakers,900]
]
```

## 💡 Hints:

+ This exercise is similar to the `Fashion Inventory A and B` but, DO NOT paste the code from before.

+ If there is no shoe containing `black` in its name, the function should return an empty array `[]`.

+ Now, you have to find all the shoes with `black` in the name. Your function should filter these shoes and return them similar to part A.