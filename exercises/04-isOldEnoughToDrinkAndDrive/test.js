const rewire = require ("rewire");

test ('It is always illegal to drink and drive in the United States, you must always return false', () => {
    const isOldEnoughToDrinkAndDrive = rewire ('./app.js').__get__("isOldEnoughToDrinkAndDrive");

    expect(isOldEnoughToDrinkAndDrive(10)).toBe(false);
    expect(isOldEnoughToDrinkAndDrive(18)).toBe(false);
    expect(isOldEnoughToDrinkAndDrive(21)).toBe(false);
    expect(isOldEnoughToDrinkAndDrive(30)).toBe(false);
})
