const rewire = require ("rewire");

test('Function computeAverageOfNumbers must exist', () => {
    const computeAverageOfNumbers = rewire("./app.js").__get__("computeAverageOfNumbers");
    expect(computeAverageOfNumbers).toBetruthy();
});

test ('The function must return the average of the given list of numbers', () => {
    const computeAverageOfNumbers = rewire ('./app.js').__get__("computeAverageOfNumbers");
    let input = [1,2,3,4,5];
    let output = computeAverageOfNumbers(input);
    expect(output).toBe(3);
})

test ('The function must return the average of the given list of numbers (Testing with a different list)', () => {
    const computeAverageOfNumbers = rewire ('./app.js').__get__("computeAverageOfNumbers");
    let input = [1,2,3,4,5,7,8,9];
    let output = computeAverageOfNumbers(input);
    expect(output).toBe(4.875);
})

test ('If the list is empty the function must return 0', () => {
    const computeAverageOfNumbers = rewire ('./app.js').__get__("computeAverageOfNumbers");
    let input = [];
    let output = computeAverageOfNumbers(input);
    expect(output).toBe(0);
})