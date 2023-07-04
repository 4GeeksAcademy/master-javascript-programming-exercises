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
  let newListOfBlack = []
  shoeList.map((item, index) => {
      item.shoes.map((item2, index) => {
          if (item2.name.includes("black")) newListOfBlack.push([item.name, item2.name, item2.price])
      })
  })
  return newListOfBlack;
}

console.log(renderInventory(currentInventory));
