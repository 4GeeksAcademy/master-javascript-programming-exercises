const rewire = require("rewire");

test ('should return that 16 is old enough to drive', () => {
    const isOldEnoughToDrive = rewire ("./app.js").__get__("isOldEnoughToDrive");

    const result = isOldEnoughToDrive(16);
    expect(result).toBeTruthy();
})

test ('should return that 16 is old enough to drive', () => {
    const isOldEnoughToDrive = rewire ("./app.js").__get__("isOldEnoughToDrive");

    const result = isOldEnoughToDrive(12);
    expect(result).toBeFalsy();
})