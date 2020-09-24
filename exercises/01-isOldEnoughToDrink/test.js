const rewire = require("rewire");

test('Function isOldEnoughToDrink must exist', () => {
    const isOldEnoughToDrink = rewire("./app.js").__get__("isOldEnoughToDrink");
    expect(isOldEnoughToDrink).not.toBe(undefined);
});

test('Function isOldEnoughToDrink must return true or false', () => {
    const isOldEnoughToDrink = rewire("./app.js").__get__("isOldEnoughToDrink");
    expect(isOldEnoughToDrink(21)).not.toBe(undefined);
});

test('Function isOldEnoughToDrink must return a boolean', () => {
    const isOldEnoughToDrink = rewire("./app.js").__get__("isOldEnoughToDrink");
    expect(typeof(isOldEnoughToDrink(21))).toBe('boolean');
});

test('That 21 years is old enough', () => {

    const isOldEnoughToDrink = rewire("./app.js").__get__("isOldEnoughToDrink");

    const result = isOldEnoughToDrink(21);
    expect(result).toBe(true);
});

test('That 19 years is not old enough', () => {

    const isOldEnoughToDrink = rewire("./app.js").__get__("isOldEnoughToDrink");

    const result = isOldEnoughToDrink(19);
    expect(result).toBe(false);
});