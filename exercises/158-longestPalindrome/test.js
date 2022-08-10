const rewire = require('rewire');
const findLongestPalindrome = rewire('./app.js').__get__(
  'findLongestPalindrome'
);

test('Function findLongestPalindrome must exist', () => {
  expect(findLongestPalindrome).not.toBe(undefined);
});
test('Function findLongestPalindrome must return something', () => {
  expect(findLongestPalindrome('some text')).not.toBe(undefined);
});
test('Function findLongestPalindrome must return a string', () => {
  expect(typeof findLongestPalindrome('some text')).toBe('string');
});

test('Function reverseString must exist', () => {
  expect(reverseString).not.toBe(undefined);
});
test('Function reverseString must return something', () => {
  expect(reverseString('some text')).not.toBe(undefined);
});

test('Function isPalindrome must exist', () => {
  expect(isPalindrome).not.toBe(undefined);
});
test('Function isPalindrome must return something', () => {
  expect(isPalindrome('some text')).not.toBe(undefined);
});

test('Function sortAscendingByLength must exist', () => {
  expect(sortAscendingByLength).not.toBe(undefined);
});
test('Function sortAscendingByLength must return something', () => {
  expect(sortAscendingByLength('word', 'word')).not.toBe(undefined);
});

test('Tested with "My dad is a racecar athlete" and it should return "a racecar a"', () => {
  expect(findLongestPalindrome('My dad is a racecar athlete')).toBe(
    'a racecar a'
  );
});

test('Tested with "Madam, i\'m adam" and it should return "Madam"', () => {
  expect(findLongestPalindrome("Madam, i'm adam")).toBe('Madam');
});
