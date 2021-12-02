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

test('The function must returns longest word within a sentence.', () => {
    const findLongestPalindrome = rewire("./app.js").__get__("findLongestPalindrome");

    expect(findLongestPalindrome('My dad is a racecar athlete')).toBe('a racecar a')
    expect(findLongestPalindrome('Madam, i\'m adam')).toBe('Madam')
});