const rewire = require("rewire");

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