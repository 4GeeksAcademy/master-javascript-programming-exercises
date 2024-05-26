let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 },
    ],
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 },
    ],
  },
];

function renderAverageCostPerDesigner(inventory) {
    // your code here
    let total = 0;
    let quantity = 0;
    let name = '';
    let obj = {};
    let arr = [];

    for (let i = 0; i < inventory.length; i++) {
      for (let k = 0; k < inventory[i].shoes.length; k++) {
        total += inventory[i].shoes[k].price;
        name = inventory[i].name;
        quantity++;
      }
      obj.name = name;
      obj.averagePrice = total / quantity;
      arr.push(obj);
      total = 0;
      quantity = 0;
      name = '';
      obj = {};
    }

    return arr;
}

console.log(renderAverageCostPerDesigner(currentInventory));
