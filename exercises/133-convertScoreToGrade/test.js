
const rewire = require('rewire');
const convertScoreToGrade = rewire('./app.js').__get__('convertScoreToGrade');

test('Function convertScoreToGrade must exist', () => {
  expect(convertScoreToGrade).not.toBe(undefined);
});

test('Function convertScoreToGrade must return something', () => {
  expect(convertScoreToGrade(1)).not.toBe(undefined);
});

test('Function convertScoreToGrade must return a string', () => {
  expect(typeof convertScoreToGrade(1)).toBe('string');
});

test('If the punctuation is from 100 to 90, it must return grade "A"', () => {
  expect(convertScoreToGrade(91)).toBe('A');
});

test('If the punctuation is from 89 to 80, it must return grade "B"', () => {
  expect(convertScoreToGrade(83)).toBe('B');
});

test('If the punctuation is from 79 to 70, it must return grade "C"', () => {
  expect(convertScoreToGrade(78)).toBe('C');
});

test('If the punctuation is from 69 to 60, it must return grade "D"', () => {
  expect(convertScoreToGrade(68)).toBe('D');
});

test('If the punctuation is from 59 to 0, it must return grade "F"', () => {
  expect(convertScoreToGrade(42)).toBe('F');
});

test('If the given score is greater than 100 or less than 0, it should return "INVALID SCORE"', () => {
  expect(convertScoreToGrade(104)).toBe('INVALID SCORE');
});
