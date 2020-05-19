const rewire = require ("rewire");

test ('is old enough to drink and drive', () => {
    const isOldEnoughToDrinkAndDrive = rewire ('./app.js').__get__("isOldEnoughToDrinkAndDrive");

    const result = isOldEnoughToDrinkAndDrive(22);
    expect(result).toBeFalsy();
})