let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

function getLaceNameDataForShoes(inventory) {
    // your code here
    let arr = [];

    for (let i = 0; i < inventory.length; i++) {
      for (let k = 0; k < inventory[i].shoes.length; k++) {
        if (inventory[i].shoes[k].name.includes("lace")) {
          let nameWords = [];
          let obj = {};

          nameWords = (inventory[i].shoes[k].name.split(" "));
          obj.nameWords = nameWords;

          if (nameWords.indexOf("lace-up") > -1) {
            obj.targetWordIndex = nameWords.indexOf("lace-up");  
          } else {
            obj.targetWordIndex = nameWords.indexOf("laced");
          }
          
          arr.push(obj);
        }
      }
    }

    return arr;
}

console.log(getLaceNameDataForShoes(currentInventory));
