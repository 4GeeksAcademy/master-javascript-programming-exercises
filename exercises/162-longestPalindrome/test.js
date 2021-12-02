const rewire = require("rewire");

test('Function findLongestPalindrome must exist', () => {
    const findLongestPalindrome = rewire("./app.js").__get__("findLongestPalindrome");
    expect(findLongestPalindrome).not.toBe(undefined);
});

test('Function reverseString must exist', () => {
    const reverseString = rewire("./app.js").__get__("reverseString");
    expect(reverseString).not.toBe(undefined);
});
test('Function isPalindrome must exist', () => {
    const isPalindrome = rewire("./app.js").__get__("isPalindrome");
    expect(isPalindrome).not.toBe(undefined);
});
test('Function sortAscendingByLength must exist', () => {
    const sortAscendingByLength = rewire("./app.js").__get__("sortAscendingByLength");
    expect(sortAscendingByLength).not.toBe(undefined);
});

test('Tested with "My dad is a racecar athlete" and it should return "a racecar a"', () => {
    const findLongestPalindrome = rewire("./app.js").__get__("findLongestPalindrome");

    expect(findLongestPalindrome('My dad is a racecar athlete')).toBe('a racecar a')
});

test('Tested with "Madam, i\'m adam" and it should return "Madam"', () => {
    const findLongestPalindrome = rewire("./app.js").__get__("findLongestPalindrome");

    expect(findLongestPalindrome('Madam, i\'m adam')).toBe('Madam')
});
