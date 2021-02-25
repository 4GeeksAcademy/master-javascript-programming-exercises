const rewire = require("rewire");

test('Function transformFirstAndLast must exist', () => {
    const transformFirstAndLast = rewire("./app.js").__get__("transformFirstAndLast");
    expect(transformFirstAndLast).not.toBe(undefined);
});

test('The function must return an object as the first element and the key as the last element in the array.', () => {
    const transformFirstAndLast = rewire("./app.js").__get__("transformFirstAndLast");

    let output = transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'])
    expect(output).toEqual({ Queen: 'Beyonce' })
})

test('The function must return an object as the first element and the key as the last element in the array.', () => {
    const transformFirstAndLast = rewire("./app.js").__get__("transformFirstAndLast");

    let output = transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey'])
    expect(output).toEqual({ Kevin: 'Spacey' })
})