const rewire = require ("rewire");
const isPersonOldEnoughToDrive = rewire("./app.js").__get__("isPersonOldEnoughToDrive");

test('Function isPersonOldEnoughToDrive must exist', () => {
    expect(isPersonOldEnoughToDrive).not.toBe(undefined);
});
test('Function isPersonOldEnoughToDrive must return something', () => {
    expect(isPersonOldEnoughToDrive({})).not.toBe(undefined);
});

test ('Function should return a false if age less than 16', () => {
    expect(isPersonOldEnoughToDrive({age: 15 })).toBe(false);
})
test ('Function should return a false if age less than 16', () => {
    expect(isPersonOldEnoughToDrive({age: 9 })).toBe(false);
})
test ('Function should return a true if age equal or greatter than 16', () => {
   expect(isPersonOldEnoughToDrive({ age: 16 })).toBe(true);

})
test ('Function should return a true if age equal than 18', () => {
    expect(isPersonOldEnoughToDrive({ age: 18 })).toBe(true);
})