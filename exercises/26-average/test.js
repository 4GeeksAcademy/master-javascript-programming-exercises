const rewire = require ("rewire");

test('Function average must exist', () => {
    const average = rewire("./app.js").__get__("average");
    expect(average).not.toBe(undefined);
});

test ('function should returns their average.', () => {
    const average = rewire ('./app.js').__get__("average");

    expect(average(24, 36)).toBe(30);
    expect(average(102, 93)).toBe(97.5);
})