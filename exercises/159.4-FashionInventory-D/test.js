const rewire = require('rewire');
const file = rewire('./app.js');
const getLaceNameDataForShoes = file.__get__('getLaceNameDataForShoes');

test('The function getLaceNameDataForShoes must exist', function () {
  expect(getLaceNameDataForShoes).toBeTruthy();
});
test('The function getLaceNameDataForShoes must return something', function () {
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
  expect(getLaceNameDataForShoes(inventory)).toBeTruthy();
});
test('The function getLaceNameDataForShoes must return an array of objects', function () {
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
  expect(typeof getLaceNameDataForShoes(inventory)).toBe('object') &&
    expect(typeof getLaceNameDataForShoes(inventory)[0]).toBe('object');
});

test('Function getLaceNameDataForShoes should return the correct data', function () {
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

  let result = [
    {
      nameWords: ['tasselled', 'black', 'low-top', 'lace-up'],
      targetWordIndex: 3,
    },
    {
      nameWords: ['tasselled', 'green', 'low-top', 'lace-up'],
      targetWordIndex: 3,
    },
    {
      nameWords: ['red', 'leather', 'laced', 'sneakers'],
      targetWordIndex: 2,
    },
    {
      nameWords: ['black', 'leather', 'laced', 'sneakers'],
      targetWordIndex: 2,
    },
  ];

  expect(getLaceNameDataForShoes(inventory)).toEqual(result);
});

test('Function getLaceNameDataForShoes should return the correct data. Testing with different values', function () {
  let inventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        { name: 'tasselled black low-top lace-up', price: 1000 },
        { name: 'plain olive suede moccasin', price: 1050 },
      ],
    },
    {
      name: 'Gucci',
      shoes: [
        { name: 'red leather laced sneakers', price: 800 },
        { name: 'black leather moccasins', price: 900 },
      ],
    },
    {
      name: 'Salvatore Ferragamo',
      shoes: [
        { name: 'black special laced sneakers', price: 800 },
        { name: 'green crocodile leather moccasins', price: 900 },
      ],
    },
  ];

  let result = [
    {
      nameWords: ['tasselled', 'black', 'low-top', 'lace-up'],
      targetWordIndex: 3,
    },
    {
      nameWords: ['red', 'leather', 'laced', 'sneakers'],
      targetWordIndex: 2,
    },
    {
      nameWords: ['black', 'special', 'laced', 'sneakers'],
      targetWordIndex: 2,
    },
  ];

  expect(getLaceNameDataForShoes(inventory)).toEqual(result);
});
