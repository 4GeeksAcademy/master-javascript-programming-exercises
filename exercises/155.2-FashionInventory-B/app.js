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
    let finalList=[]
    let average = 0;
    for(let i=0;i<inventory.length;i++){
      for(let k=0;k<inventory[i].shoes.length;k++){
        average += inventory[i].shoes[k].price;
      }
      average = average/inventory[i].shoes.length
      finalList.push({name:inventory[i].name,averagePrice:average})
      average = 0;
    }
    return finalList;
  
}

console.log(renderAverageCostPerDesigner(currentInventory));
