const rewire = require('rewire');
const renderInventory = rewire('./app.js').__get__('renderInventory');

test('Function renderInventory must exist', () => {
  expect(renderInventory).not.toBe(undefined);
});

test('Function renderInventory must return something', () => {
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
  expect(renderInventory(inventory)).toBeTruthy();
});
test('Function renderInventory must return an array with arrays', () => {
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
  expect(typeof renderInventory(inventory)).toBe('object') &&
    typeof expect(renderInventory(inventory)[0]).toBe('object');
});

test('The function should filter all the shoes that contain the word "black" in the array', () => {
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
    ['Gucci', 'black leather laced sneakers', 900],
  ]);
});

test('The function should filter all the shoes that contain the word "black" in the array. Testing with different values', () => {
  let output = renderInventory([
    {
      name: 'Santa Barbara',
      shoes: [
        { name: 'smooth black suede moccasins', price: 950 },
        { name: 'plain olive suede moccasin', price: 1050 },
      ],
    },
  ]);
  expect(output).toEqual([
    ['Santa Barbara', 'smooth black suede moccasins', 950],
  ]);
});

test('If there is no shoe containing black in its name, the function should return an empty array []', () => {
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
  expect(output).toEqual([]);
});
