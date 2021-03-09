const rewire = require ("rewire");

test('Function isPersonOldEnoughToDrink must exist', () => {
    const isPersonOldEnoughToDrink = rewire("./app.js").__get__("isPersonOldEnoughToDrink");
    expect(isPersonOldEnoughToDrink).not.toBe(undefined);
});

test ('Function should return a false if age less than 21', () => {
    const isPersonOldEnoughToDrink = rewire ('./app.js').__get__("isPersonOldEnoughToDrink");
    expect(isPersonOldEnoughToDrink(20)).toBe(false);
})
test ('Function should return a true if age are greather than or equal to 21', () => {
    const isPersonOldEnoughToDrink = rewire ('./app.js').__get__("isPersonOldEnoughToDrink");
    expect(isPersonOldEnoughToDrink(21)).toBe(true);
    expect(isPersonOldEnoughToDrink(24)).toBe(true);
})