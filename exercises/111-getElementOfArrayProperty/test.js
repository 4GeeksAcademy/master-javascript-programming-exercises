const rewire = require('rewire');
const getElementOfArrayProperty = rewire('./app.js').__get__(
  'getElementOfArrayProperty'
);
test('Function getElementOfArrayProperty must exist', () => {
  expect(getElementOfArrayProperty).not.toBe(undefined);
});
test('Function getElementOfArrayProperty must return something ', () => {
  expect(getElementOfArrayProperty({ key: ['test'] }, 'key', 0)).not.toBe(
    undefined
  );
});
test('Function getElementOfArrayProperty must return a string', () => {
  expect(typeof getElementOfArrayProperty({ key: ['test'] }, 'key', 0)).toBe(
    'string'
  );
});

test('The function must returns the value of an element in the index provided within the Object in the given Key.', () => {
    let obj = {
        key: ['Vladimir', 'Jimmy', 'Harris']
    };
    let output = getElementOfArrayProperty(obj, 'key', 0)
    expect(output).toBe('Vladimir')
})

test('If the given index is out of range of the array located at the given key, it should return undefined', () => {
    let obj = {
        key: ['Vladimir', 'Jimmy', 'Harris']
    };
    let output = getElementOfArrayProperty(obj, 'key', 3)
    expect(output).toBe(undefined)
})
test('If the array is empty, it should return undefined', () => {
    let obj = {
        key: []
    };
    let output = getElementOfArrayProperty(obj, 'key', 2)
    expect(output).toBe(undefined)
})

test('If the property in the given key is not an array, it should return undefined.', () => {
    let obj = {
        key: 9
    };
    let output = getElementOfArrayProperty(obj, 'key', 9)
    expect(output).toBe(undefined)
})

test('If there is no property on the key, it should return undefined.', () => {
    let obj = {
    };
    let output = getElementOfArrayProperty(obj, 'key', 2)
    expect(output).toBe(undefined)
})
