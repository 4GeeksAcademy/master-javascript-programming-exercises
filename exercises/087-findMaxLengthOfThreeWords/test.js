const rewire = require ("rewire");

test('Function findMaxLengthOfThreeWords must exist', () => {
    const findMaxLengthOfThreeWords = rewire("./app.js").__get__("findMaxLengthOfThreeWords");
    expect(findMaxLengthOfThreeWords).not.toBe(undefined);
});

test ('The function should return the element with more characters.', () => {
    const findMaxLengthOfThreeWords = rewire ('./app.js').__get__("findMaxLengthOfThreeWords");
    let output = findMaxLengthOfThreeWords('past', 'present', 'future');
    
 
   
     expect(output).toBe(7) 
     
     let output2 = findMaxLengthOfThreeWords('Toyota', 'Honda', 'Chevrolet');
     expect(output2).toBe(9)
    })