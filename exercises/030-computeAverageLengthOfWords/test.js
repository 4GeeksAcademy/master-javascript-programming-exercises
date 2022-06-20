const rewire = require ("rewire");
const computeAverageLengthOfWords = rewire("./app.js").__get__("computeAverageLengthOfWords");

test('Function computeAverageLengthOfWords must exist', () => {
    expect(computeAverageLengthOfWords).not.toBe(undefined);
});
test('Function computeAverageLengthOfWords should return a number', () => {
    expect(typeof computeAverageLengthOfWords("test","test")).toBe("number");
});

test ('The function should return the average of their lengths. Testing with (\'hammer\', \'anvil\')', () => {
    expect(computeAverageLengthOfWords('hammer', 'anvil')).toBe(5.5);
})
test ('The function should return the average of their lengths. Testing with (\'pepito\', \'forever\')', () => {
    expect(computeAverageLengthOfWords('pepito', 'forever')).toBe(6.5);
})