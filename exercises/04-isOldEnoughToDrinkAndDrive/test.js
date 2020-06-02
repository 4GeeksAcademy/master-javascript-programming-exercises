const rewire = require ("rewire");

test ('It is always illegal to drink and drive in the United States.', () => {
    const isOldEnoughToDrinkAndDrive = rewire ('./app.js').__get__("isOldEnoughToDrinkAndDrive");

    const result = isOldEnoughToDrinkAndDrive(21);
    expect(result).toBe(false);
})

test ('It is always illegal to drink and drive in the United States.', () => {
    const isOldEnoughToDrinkAndDrive = rewire ('./app.js').__get__("isOldEnoughToDrinkAndDrive");

    const result = isOldEnoughToDrinkAndDrive(21);
    expect(result).toBeFalsy();
})
