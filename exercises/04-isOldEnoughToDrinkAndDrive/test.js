const rewire = require ("rewire");

test ('is illegal to drink and drive', () => {
    const isOldEnoughToDrinkAndDrive = rewire ('./app.js').__get__("isOldEnoughToDrinkAndDrive");

    const result = isOldEnoughToDrinkAndDrive(21);
    expect(result).toBe(false);
})

test ('is illegal to drink and drive', () => {
    const isOldEnoughToDrinkAndDrive = rewire ('./app.js').__get__("isOldEnoughToDrinkAndDrive");

    const result = isOldEnoughToDrinkAndDrive(21);
    expect(result).toBeFalsy();
})

console.log = jest.fn(() => null);
test ( 'console log should return false', function(){
    
    require("./app.js");
    
    expect(console.log).toHaveBeenCalledWith(false);
})