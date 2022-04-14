const rewire = require("rewire");
const PhoneNumberFormatter = rewire("./app.js").__get__("PhoneNumberFormatter");
test('Function PhoneNumberFormatter must exist', () => {
    expect(PhoneNumberFormatter).not.toBe(undefined);
});

test('The function must transform the array into a phone format string as expected.', () => {
    expect(new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).render()).toEqual('(650) 835-9172')
    
});

test('The solution should work with another entries. Testing with [3, 0, 7, 2, 1, 7, 9, 5, 7, 3]', () => {
    expect(new PhoneNumberFormatter([3, 0, 7, 2, 1, 7, 9, 5, 7, 3]).render()).toEqual('(307) 217-9573')
    
});
