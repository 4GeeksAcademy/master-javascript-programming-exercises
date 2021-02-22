const rewire = require ("rewire");

test('Function renderInventory must exist', () => {
    const renderInventory = rewire("./app.js").__get__("renderInventory");
    expect(renderInventory).not.toBe(undefined);
});
