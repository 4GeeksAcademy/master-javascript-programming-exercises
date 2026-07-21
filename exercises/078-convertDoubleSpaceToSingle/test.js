const rewire = require("rewire");
const convertDoubleSpaceToSingle = rewire("./app.js").__get__("convertDoubleSpaceToSingle");

test('Function convertDoubleSpaceToSingle must exist', () => {
    expect(convertDoubleSpaceToSingle).not.toBe(undefined);
});

test('Function convertDoubleSpaceToSingle must return something', () => {   
    expect(convertDoubleSpaceToSingle("test  test")).not.toBe(undefined);
});

test('Function convertDoubleSpaceToSingle must return a string', () => {   
    expect(typeof convertDoubleSpaceToSingle("test  test")).toBe("string");
});

test('The function must return all the double spaces converted to single spaces', () => {
    let output = convertDoubleSpaceToSingle("my  cat  has  broken,  says  woof");
    expect(output).toEqual("my cat has broken, says woof");
});

test('The function must return all the double spaces converted to single spaces. Testing with different values', () => {
    let output = convertDoubleSpaceToSingle("string  with  double  spaces");
    expect(output).toEqual("string with double spaces");
});

test('The function must return all the double spaces converted to single spaces. Testing with different values', () => {
    let output = convertDoubleSpaceToSingle("string  with double spaces");
    expect(output).toEqual("string with double spaces");
});
