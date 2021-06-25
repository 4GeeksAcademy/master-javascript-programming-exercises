const rewire = require("rewire");

test('Function PhoneNumberFormatter must exist', () => {
    const PhoneNumberFormatter = rewire("./app.js").__get__("PhoneNumberFormatter");
    expect(PhoneNumberFormatter).not.toBe(undefined);
});

test('The function must transform the array into a phone format string.', () => {
    const PhoneNumberFormatter = rewire("./app.js").__get__("PhoneNumberFormatter");

    expect(PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2])).toBe('(650) 835-9172')
    expect(PhoneNumberFormatter([3, 0, 7, 2, 1, 7, 9, 5, 7, 3])).toBe('(307) 217-9573')
});
