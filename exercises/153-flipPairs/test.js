const rewire = require("rewire");

test('Function flipPairs must exist', () => {
    const flipPairs = rewire("./app.js").__get__("flipPairs");
    expect(flipPairs).not.toBe(undefined);
});

test('The function must Mix each pair of characters in a string.', () => {
    const flipPairs = rewire("./app.js").__get__("flipPairs");

    let output = flipPairs('check out how interesting this problem is, it\'s insanely interesting!')
    expect(output).toBe('hcce kuo toh wnietertsni ghtsip orlbmei ,si \'t sniasenyli tnreseitgn!')

    output = flipPairs('check my backflip!')
    expect(output).toBe('hcce kymb cafkil!p')
})
