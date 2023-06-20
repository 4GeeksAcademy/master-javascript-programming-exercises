const rewire = require ("rewire");

test ('It is always illegal to drink and drive in the United States, you must always return false', () => {
    const isOldEnoughToDrinkOrDrive = rewire ('./app.js').__get__("isOldEnoughToDrinkOrDrive");

    expect(isOldEnoughToDrinkOrDrive(10)).toBe(false);
    expect(isOldEnoughToDrinkOrDrive(18)).toBe(true); 
    expect(isOldEnoughToDrinkOrDrive(21)).toBe(true); 
    expect(isOldEnoughToDrinkOrDrive(30)).toBe(true); 
})
