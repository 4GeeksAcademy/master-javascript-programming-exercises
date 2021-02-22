const rewire = require ("rewire");

test('Function PhoneNumberFormatter must exist', () => {
    const PhoneNumberFormatter = rewire("./app.js").__get__("PhoneNumberFormatter");
    expect(PhoneNumberFormatter).not.toBe(undefined);
});
