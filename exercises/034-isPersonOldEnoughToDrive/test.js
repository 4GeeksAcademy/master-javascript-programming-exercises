const rewire = require ("rewire");

test('Function isPersonOldEnoughToDrive must exist', () => {
    const isPersonOldEnoughToDrive = rewire("./app.js").__get__("isPersonOldEnoughToDrive");
    expect(isPersonOldEnoughToDrive).not.toBe(undefined);
});

test ('Function should return a false if age less than 16', () => {
    const isPersonOldEnoughToDrive = rewire ('./app.js').__get__("isPersonOldEnoughToDrive");
    expect(isPersonOldEnoughToDrive({age: 15 })).toBe(false);
})
test ('Function should return a true if age equal than 16', () => {
    const isPersonOldEnoughToDrive = rewire ('./app.js').__get__("isPersonOldEnoughToDrive");
    expect(isPersonOldEnoughToDrive({ age: 16 })).toBe(true);
    expect(isPersonOldEnoughToDrive({ age: 18 })).toBe(true);
})