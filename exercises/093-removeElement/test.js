const rewire = require ("rewire");

test('Function removeElement must exist', () => {
    const removeElement = rewire("./app.js").__get__("removeElement");
    expect(removeElement).not.toBe(undefined);
});

test ('The function must return only the elements of the array that are greater than 10.', () => {
    const removeElement = rewire ('./app.js').__get__("removeElement");
    
 
    var output = removeElement([1, 2, 3, 2, 1], 2);

    
    
    expect().toBe();
})