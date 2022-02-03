# `159-4` FashionInventory-D

## 📝 Instructions:

You have a fashion catalog, an inventory of items from various high-fashion designers.

Each designer has a lineup of shoes. Each shoe has a name and a price.

It looks like this:

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

The task now is to find the laced shoes but we are going to render them in a somewhat complex format. Your function should return shoe names containing 'lace' in them, and indicates which word contains 'lace'.


1. Complete the `getLaceNameDataForShoes` function to return the expected result.

2. The function goes through the `inventory` objects focusing on its `shoes` property, checking if the `name` of the shoes contains `lace` laces, this also includes `laced`.

3. Then it returns a list of objects with the `nameWords` property whose value will be a list with the words of the shoe name that includes `lace` / `laced`. This object also has a property called `targetWordIndex` in which the index in which the word `lace` / `laced` is found is shown.


## 💡 Hint

Help yourself with the information on this page to get words from a string according to spaces `" "`, commas `,` , etc.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split

The return value's format should be structured like this:

```Js
[
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
]
```