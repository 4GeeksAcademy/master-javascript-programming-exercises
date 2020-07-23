const rewire = require ("rewire");

test ('The function must return only the odd elements on a given key.', () => {
    const computeAverageOfNumbers = rewire ('./app.js').__get__("computeAverageOfNumbers");
    
    var input = [1,2,3,4,5];
    var output = computeAverageOfNumbers(input);


    expect(output).toBe(3);
    
})


test ('The function must return only the odd elements on a given key.', () => {
    const computeAverageOfNumbers = rewire ('./app.js').__get__("computeAverageOfNumbers");
    
    var input = [1,2,3,4,5,7,8,9];
    var output = computeAverageOfNumbers(input);


    expect(output).toBe(4.875);
    
})

   


