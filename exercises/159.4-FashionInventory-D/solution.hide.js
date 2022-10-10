let inventory = [
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

function getLaceNameDataForShoes(inventory) {
  // your code here
  let aux = [];
  inventory.map((e) => {
    e.shoes.map((x) => {
      let splited = x.name.split(' ');
      let counting = 0;
      splited.map((s) => {
        if (s.startsWith('lace'))
          aux.push({ nameWords: splited, targetWordIndex: counting });
        else counting++;
      });
    });
  });
  return aux;
}

console.log(getLaceNameDataForShoes(inventory));
