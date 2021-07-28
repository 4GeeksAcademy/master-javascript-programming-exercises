const rewire = require ("rewire");

test('Function isPersonOldEnoughToDrinkAndDrive must exist', () => {
    const isPersonOldEnoughToDrinkAndDrive = rewire("./app.js").__get__("isPersonOldEnoughToDrinkAndDrive");
    expect(isPersonOldEnoughToDrinkAndDrive).not.toBe(undefined);
});


test ('Function should return a false if age less than 21', () => {
    const isPersonOldEnoughToDrinkAndDrive = rewire ('./app.js').__get__("isPersonOldEnoughToDrinkAndDrive");
    expect(isPersonOldEnoughToDrinkAndDrive({ age: 20 })).toBe(false);
})
test ('Function should return a true if age greater than or equal than 21', () => {
    const isPersonOldEnoughToDrinkAndDrive = rewire ('./app.js').__get__("isPersonOldEnoughToDrinkAndDrive");
    expect(isPersonOldEnoughToDrinkAndDrive({ age: 21 })).toBe(true);
    expect(isPersonOldEnoughToDrinkAndDrive({ age: 23 })).toBe(true);
})
