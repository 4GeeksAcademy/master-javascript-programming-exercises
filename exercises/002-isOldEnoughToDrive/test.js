const rewire = require("rewire");

test('Function isOldEnoughToDrive must exist', () => {
    const isOldEnoughToDrive = rewire("./app.js").__get__("isOldEnoughToDrive");
    expect(isOldEnoughToDrive).not.toBe(undefined);
});

test('Function isOldEnoughToDrive must return true or false', () => {
    const isOldEnoughToDrive = rewire("./app.js").__get__("isOldEnoughToDrive");
    expect(isOldEnoughToDrive(21)).not.toBe(undefined);
});

test('Function isOldEnoughToDrive must return a boolean', () => {
    const isOldEnoughToDrive = rewire("./app.js").__get__("isOldEnoughToDrive");
    expect(typeof(isOldEnoughToDrive(21))).toBe('boolean');
});

test ('should return that 16 is old enough to drive', () => {
    const isOldEnoughToDrive = rewire ("./app.js").__get__("isOldEnoughToDrive");

    const result = isOldEnoughToDrive(16);
    expect(result).toBe(true);
})

test ('should return that 15 isn\'t old enough to drive', () => {
    const isOldEnoughToDrive = rewire ("./app.js").__get__("isOldEnoughToDrive");

    const result = isOldEnoughToDrive(15);
    expect(result).toBe(false);
})