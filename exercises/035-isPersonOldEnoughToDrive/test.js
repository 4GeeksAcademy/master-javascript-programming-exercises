const rewire = require ("rewire");
const isPersonOldEnoughToDrive = rewire("./app.js").__get__("isPersonOldEnoughToDrive");

test('Function isPersonOldEnoughToDrive must exist', () => {
    expect(isPersonOldEnoughToDrive).not.toBe(undefined);
});
test('Function isPersonOldEnoughToDrive must return something', () => {
    expect(isPersonOldEnoughToDrive({})).not.toBe(undefined);
});

test ('Function should return false if age is less than 16', () => {
    expect(isPersonOldEnoughToDrive({age: 15 })).toBe(false);
})
test ('Function should return false if age is less than 16', () => {
    expect(isPersonOldEnoughToDrive({age: 9 })).toBe(false);
})
test ('Function should return true if age is equal or greater than 16', () => {
   expect(isPersonOldEnoughToDrive({ age: 16 })).toBe(true);

})
test ('Function should return true if age is equal or greater than 16', () => {
    expect(isPersonOldEnoughToDrive({ age: 18 })).toBe(true);
})
