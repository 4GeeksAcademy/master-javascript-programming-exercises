# `159.3` FashionInventory-C

## 📝 Instrucciones

This exercise is similar to the  "Fashion Inventory A and B" but, DO NOT paste the code from before.

You have a fashion catalog, an inventory of items from various high fashion designers. 

Each designer has a lineup of shoes. Each shoe has a name and a price.

```JS

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

 Now, you have to find all the shoes with `black` in the name. 

 ## Example output:
 
```Js
[
   [Brunello Cucinelli,tasselled black low-top lace-up,1000],
   [Gucci,black leather laced sneakers,900]
]
```

## 💡 Hint

+ Create helper funcions if needed

+ Your function should filter `black` shoes.