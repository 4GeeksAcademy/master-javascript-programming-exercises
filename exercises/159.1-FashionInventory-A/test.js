const rewire = require('rewire');
const renderInventory = rewire('./app.js').__get__('renderInventory');

test('Function renderInventory must exist', () => {
  expect(renderInventory).not.toBe(undefined);
});

test('Function renderInventory must return something', () => {
  expect(
    renderInventory([
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
    ])
  ).not.toBe(undefined);
});

test('Function renderInventory must return a object', () => {
  expect(
    typeof renderInventory([
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
    ])
  ).toBe('object');
});

test('The function must find all the shoes of all the designers and list them in an arrangement of arrangements.', () => {
  let output = renderInventory([
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
  ]);
  expect(output).toEqual([
    ['Brunello Cucinelli', 'tasselled black low-top lace-up', 1000],
    ['Brunello Cucinelli', 'tasselled green low-top lace-up', 1100],
    ['Brunello Cucinelli', 'plain beige suede moccasin', 950],
    ['Brunello Cucinelli', 'plain olive suede moccasin', 1050],
    ['Gucci', 'red leather laced sneakers', 800],
    ['Gucci', 'black leather laced sneakers', 900],
  ]);
});
test('The function must find all the shoes of all the designers and list them in an arrangement of arrangements.', () => {
  let output = renderInventory([
    {
      name: 'Adidas',
      shoes: [
        { name: 'ZX 2K BOOST SHOES', price: 150 },
        { name: 'MULTIX SHOES', price: 80 },
      ],
    },
    {
      name: 'Nike',
      shoes: [
        { name: 'Jordan 6 Rings', price: 170 },
        { name: 'Nike Air Max 2090 EOI', price: 160 },
      ],
    },
  ]);
  expect(output).toEqual([
    ['Adidas', 'ZX 2K BOOST SHOES', 150],
    ['Adidas', 'MULTIX SHOES', 80],
    ['Nike', 'Jordan 6 Rings', 170],
    ['Nike', 'Nike Air Max 2090 EOI', 160],
  ]);
});
