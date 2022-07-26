const rewire = require("rewire");
const or = rewire("./app.js").__get__("or");

test('Function "or" must exist', () => {
    expect(or).not.toBe(undefined);
});

test('Function "or" must return something', () => {    
    expect(or(true,true)).not.toBe(undefined);
});

test('Function "or" must exist', () => {
    expect(typeof or(true,true)).toBe("boolean");
});

test('Function must return true or false. Testing with false, false', () => {
    let output = or(false, false);
    expect(output).toBe(false);
});

test('Function must return true or false. Testing with true, false', () => {
    let output = or(true, false);
    expect(output).toBe(true);
});

test('Function must return true or false. Testing with true, true', () => {
    let output = or(true, true);
    expect(output).toBe(true)
});

test('Function must return true or false. Testing with false, true', () => {
    let output = or(false, true);
    expect(output).toBe(true)
});
