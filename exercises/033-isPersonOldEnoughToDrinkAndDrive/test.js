const rewire = require ("rewire");

test('Function isPersonOldEnoughToDrinkAndDrive must exist', () => {
    const isPersonOldEnoughToDrinkAndDrive = rewire("./app.js").__get__("isPersonOldEnoughToDrinkAndDrive");
    expect(isPersonOldEnoughToDrinkAndDrive).not.toBe(undefined);
});

test('The obj.age property, must exist with value 45', () => {
    const obj = rewire("./app.js").__get__("obj");
    
    expect(obj).toEqual({"age": 45})
});

test ('Function should return a false if age less than 21', () => {
    const isPersonOldEnoughToDrinkAndDrive = rewire ('./app.js').__get__("isPersonOldEnoughToDrinkAndDrive");
    expect(isPersonOldEnoughToDrinkAndDrive({
        age:20
    })).toBe(false);
})
test ('Function should return a true if age equal than 21', () => {
    const isPersonOldEnoughToDrinkAndDrive = rewire ('./app.js').__get__("isPersonOldEnoughToDrinkAndDrive");
    expect(isPersonOldEnoughToDrinkAndDrive({
        age:21
    })).toBe(true);
})
