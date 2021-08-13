const rewire = require("rewire");

test('Function isIsogram must exist', () => {
    const isIsogram = rewire("./app.js").__get__("isIsogram");
    expect(isIsogram).not.toBe(undefined);
});

test('Function must return true or false if no letters are repeated', () => {
    const isIsogram = rewire("./app.js").__get__("isIsogram");

    expect(isIsogram('Dermatoglyphics')).toBe(true)
    expect(isIsogram('Camile')).toBe(true)
    expect(isIsogram('Camille')).toBe(false)
});
