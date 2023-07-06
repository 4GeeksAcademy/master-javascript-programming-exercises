const rewire = require('rewire');
const renderAverageCostPerDesigner = rewire('./app.js').__get__(
  'renderAverageCostPerDesigner'
);

test('Function renderAverageCostPerDesigner must exist', () => {
  expect(renderAverageCostPerDesigner).not.toBe(undefined);
});
test('Function renderAverageCostPerDesigner must return something', () => {
  expect(
    renderAverageCostPerDesigner([
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
test('Function renderAverageCostPerDesigner must return an array of objects [{}]', () => {
  let test = [
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
  expect(typeof renderAverageCostPerDesigner(test)).toBe('object') &&
    typeof expect(renderAverageCostPerDesigner(test)[0]).toBe('object');
});

test('The function should return an array with the "name" and "averagePrice" objects of the corresponding products', () => {
  let output = renderAverageCostPerDesigner([
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
    { name: 'Brunello Cucinelli', averagePrice: 1025 },
    { name: 'Gucci', averagePrice: 850 },
  ]);
});
test('The function should return an array with the "name" and "averagePrice" objects of the corresponding products. Testing with different values', () => {
  let output = renderAverageCostPerDesigner([
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
    { name: 'Adidas', averagePrice: 115 },
    { name: 'Nike', averagePrice: 165 },
  ]);
});
