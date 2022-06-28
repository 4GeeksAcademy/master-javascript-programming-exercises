const rewire = require ("rewire");

test ('The function isOldEnoughToDrinkAndDrive must exist', () => {
    const isOldEnoughToDrinkAndDrive = rewire ('./app.js').__get__("isOldEnoughToDrinkAndDrive");
    expect(isOldEnoughToDrinkAndDrive).not.toBe(undefined);
})

test('Function isOldEnoughToDrinkAndDrive must return a boolean', () => {
    const isOldEnoughToDrinkAndDrive = rewire("./app.js").__get__("isOldEnoughToDrinkAndDrive");
    expect(typeof(isOldEnoughToDrinkAndDrive(21))).toBe('boolean');
});
test('Function isOldEnoughToDrinkAndDrive must return true or false', () => {
    const isOldEnoughToDrinkAndDrive = rewire("./app.js").__get__("isOldEnoughToDrinkAndDrive");
    expect(isOldEnoughToDrinkAndDrive(21)).not.toBe(undefined);
});

test ('It is always illegal to drink and drive in the United States, you must always return false', () => {
    const isOldEnoughToDrinkAndDrive = rewire ('./app.js').__get__("isOldEnoughToDrinkAndDrive");

    expect(isOldEnoughToDrinkAndDrive(10)).toBe(false);
    expect(isOldEnoughToDrinkAndDrive(18)).toBe(false);
    expect(isOldEnoughToDrinkAndDrive(21)).toBe(false);
    expect(isOldEnoughToDrinkAndDrive(30)).toBe(false);
})
