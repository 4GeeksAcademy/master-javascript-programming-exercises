const rewire = require("rewire");

test('Function convertDoubleSpaceToSingle must exist', () => {
    const convertDoubleSpaceToSingle = rewire("./app.js").__get__("convertDoubleSpaceToSingle");
    expect(convertDoubleSpaceToSingle).not.toBe(undefined);
});


test('The function must return all the double spaces converted to single spaces.', () => {
    const convertDoubleSpaceToSingle = rewire("./app.js").__get__("convertDoubleSpaceToSingle");

    let output = convertDoubleSpaceToSingle("string  with  double  spaces")
    expect(output).toEqual("string with double spaces")

    output = convertDoubleSpaceToSingle("my  cat  has  broken,  says  woof")
    expect(output).toEqual("my cat has broken, says woof")
})