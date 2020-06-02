const rewire = require("rewire");

test ('should return that 16 is old enough to drive', () => {
    const isOldEnoughToDrive = rewire ("./app.js").__get__("isOldEnoughToDrive");

    const result = isOldEnoughToDrive(16);
    expect(result).toBe(true);
})

test ('should return that 15 isnt old enough to drive', () => {
    const isOldEnoughToDrive = rewire ("./app.js").__get__("isOldEnoughToDrive");

    const result = isOldEnoughToDrive(15);
    expect(result).toBe(false);
})