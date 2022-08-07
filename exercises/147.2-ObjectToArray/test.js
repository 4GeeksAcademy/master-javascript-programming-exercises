const rewire = require('rewire');
const listAllValues = rewire('./app.js').__get__('listAllValues');

test('Function listAllValues must exist', () => {
  expect(listAllValues).not.toBe(undefined);
});
test('Function listAllValues must return something', () => {
  expect(
    listAllValues({
      name: 'Test',
      age: 1,
      hasPets: true,
    })
  ).not.toBe(undefined);
});
test('Function listAllValues must return an array', () => {
  expect(
    typeof listAllValues({
      name: 'Test',
      age: 1,
      hasPets: false,
    })
  ).toBe('object');
});

test('The function must returns an array of all the values of the object.', () => {
  let output = listAllValues({
    name: 'Krysten',
    age: 33,
    hasPets: false,
  });
  expect(output).toEqual(['Krysten', 33, false]);
});
test('The function must returns an array of all the values of the object.', () => {
  let output = listAllValues({
    name: 'Johnny',
    age: 57,
    role: 'actor',
  });
  expect(output).toEqual(['Johnny', 57, 'actor']);
});
