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

function renderInventory(shoeList) {
    // your code here
    let arr = [];
    let aux = [];

    for (let i = 0; i < shoeList.length; i++) {
      for (let k = 0; k < shoeList[i].shoes.length; k++) {
        if (shoeList[i].shoes[k].name.includes("black")) {
          aux.push(shoeList[i].name);
          aux.push(shoeList[i].shoes[k].name);
          aux.push(shoeList[i].shoes[k].price);
          arr.push(aux);
        }
        aux = [];
      }
    }

    return arr;
}

console.log(renderInventory(currentInventory));
