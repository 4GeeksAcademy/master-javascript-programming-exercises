const rewire = require("rewire");
const isEitherEvenOrAreBoth7 = rewire("./app.js").__get__("isEitherEvenOrAreBoth7");

test('Function "isEitherEvenOrAreBoth7" must exist', () => {
    expect(isEitherEvenOrAreBoth7).not.toBe(undefined);
});

test('Function "isEitherEvenOrAreBoth7" must return something', () => {    
    expect(isEitherEvenOrAreBoth7(1,2)).not.toBe(undefined);
});

test('Function "isEitherEvenOrAreBoth7" must return a boolean', () => {    
    expect(typeof isEitherEvenOrAreBoth7(1,2)).toBe("boolean");
});

test('Function must return parameter true or false if is even or is both are 7. Testing with (3,7)', () => {
    let output = isEitherEvenOrAreBoth7(3, 7);
    expect(output).toBe(false);
});

test('Function must return parameter true or false if is even or is both are 7. Testing with (2,3)', () => {    
    let output = isEitherEvenOrAreBoth7(2, 3);
    expect(output).toBe(true);
});

test('Function must return parameter true or false if is even or is both are 7. Testing with (5,10)', () => {    
    let output = isEitherEvenOrAreBoth7(5, 10);
    expect(output).toBe(true);
});

test('Function must return parameter true or false if is even or is both are 7. Testing with (21,33)', () => {    
    let output = isEitherEvenOrAreBoth7(21, 33);
    expect(output).toBe(false);
});

test('Function must return parameter true or false if is even or is both are 7. Testing with (7, 7)', () => {    
    let output = isEitherEvenOrAreBoth7(7, 7);
    expect(output).toBe(true);
});