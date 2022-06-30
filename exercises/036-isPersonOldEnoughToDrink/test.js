const rewire = require ("rewire");
const isPersonOldEnoughToDrink = rewire("./app.js").__get__("isPersonOldEnoughToDrink");

test('Function isPersonOldEnoughToDrink must exist', () => {

    expect(isPersonOldEnoughToDrink).not.toBe(undefined);
});
test('Function isPersonOldEnoughToDrink must return something', () => {

    expect(isPersonOldEnoughToDrink({})).not.toBe(undefined);
});

test ('Function should return a false if age less than 21', () => {
   
    expect(isPersonOldEnoughToDrink({ age: 20 })).toBe(false);
})
test ('Function should return a false if age less than 21', () => {
   
    expect(isPersonOldEnoughToDrink({ age: 7 })).toBe(false);
})
test ('Function should return a true if age are greather than or equal to 21', () => {
    
    expect(isPersonOldEnoughToDrink({ age: 21 })).toBe(true);
})
test ('Function should return a true if age are greather than or equal to 21', () => {
    
    expect(isPersonOldEnoughToDrink({ age: 24 })).toBe(true);
})