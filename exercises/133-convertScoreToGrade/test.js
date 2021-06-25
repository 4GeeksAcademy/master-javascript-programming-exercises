const rewire = require("rewire");

test('Function convertScoreToGrade must exist', () => {
    const convertScoreToGrade = rewire("./app.js").__get__("convertScoreToGrade");
    expect(convertScoreToGrade).not.toBe(undefined);
});

test('if the punctuation is from 100 to 90 it must return grade "A".', () => {
    const convertScoreToGrade = rewire('./app.js').__get__("convertScoreToGrade");

    expect(convertScoreToGrade(91)).toBe('A');
})

test('if the punctuation is from 89 to 80 it must return grade "B".', () => {
    const convertScoreToGrade = rewire('./app.js').__get__("convertScoreToGrade");

    expect(convertScoreToGrade(83)).toBe('B');
})

test('if the punctuation is from 79 to 70 it must return grade "C".', () => {
    const convertScoreToGrade = rewire('./app.js').__get__("convertScoreToGrade");

    expect(convertScoreToGrade(78)).toBe('C');
})

test('if the punctuation is from 69 to 60 it must return grade "D".', () => {
    const convertScoreToGrade = rewire('./app.js').__get__("convertScoreToGrade");

    expect(convertScoreToGrade(68)).toBe('D');
})

test('if the punctuation is from 59 to 0 it must return grade "F".', () => {
    const convertScoreToGrade = rewire('./app.js').__get__("convertScoreToGrade");

    expect(convertScoreToGrade(42)).toBe('F');
})

test('If the given score is greater than 100 or less than 0, it should return "INVALID SCORE".', () => {
    const convertScoreToGrade = rewire('./app.js').__get__("convertScoreToGrade");

    expect(convertScoreToGrade(104)).toBe('INVALID SCORE');
})