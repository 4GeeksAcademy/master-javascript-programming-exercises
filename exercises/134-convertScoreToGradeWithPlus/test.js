const rewire = require("rewire");

test('Function convertScoreToGradeWithPlusAndMinus must exist', () => {
    const convertScoreToGradeWithPlusAndMinus = rewire("./app.js").__get__("convertScoreToGradeWithPlusAndMinus");
    expect(convertScoreToGradeWithPlusAndMinus).not.toBe(undefined);
});

test('If the score is between 0 and 2 of a given range, return the letter with a "-"', () => {
    const convertScoreToGradeWithPlusAndMinus = rewire('./app.js').__get__("convertScoreToGradeWithPlusAndMinus");
    expect(convertScoreToGradeWithPlusAndMinus(72)).toBe('C-');
})

test('If the score is between 8 and 9 of a given range, return the letter with a "+"', () => {
    const convertScoreToGradeWithPlusAndMinus = rewire('./app.js').__get__("convertScoreToGradeWithPlusAndMinus");
    expect(convertScoreToGradeWithPlusAndMinus(78)).toBe('C+');
})

test('if the punctuation is from 100 to 90 it must return grade "A".', () => {
    const convertScoreToGradeWithPlusAndMinus = rewire('./app.js').__get__("convertScoreToGradeWithPlusAndMinus");

    expect(convertScoreToGradeWithPlusAndMinus(91)).toBe('A-');
})

test('if the punctuation is from 89 to 80 it must return grade "B".', () => {
    const convertScoreToGradeWithPlusAndMinus = rewire('./app.js').__get__("convertScoreToGradeWithPlusAndMinus");

    expect(convertScoreToGradeWithPlusAndMinus(83)).toBe('B');
})

test('if the punctuation is from 79 to 70 it must return grade "C".', () => {
    const convertScoreToGradeWithPlusAndMinus = rewire('./app.js').__get__("convertScoreToGradeWithPlusAndMinus");

    expect(convertScoreToGradeWithPlusAndMinus(78)).toBe('C+');
})

test('if the punctuation is from 69 to 60 it must return grade "D".', () => {
    const convertScoreToGradeWithPlusAndMinus = rewire('./app.js').__get__("convertScoreToGradeWithPlusAndMinus");

    expect(convertScoreToGradeWithPlusAndMinus(68)).toBe('D+');
})

test('if the punctuation is from 59 to 0 it must return grade "F".', () => {
    const convertScoreToGradeWithPlusAndMinus = rewire('./app.js').__get__("convertScoreToGradeWithPlusAndMinus");

    expect(convertScoreToGradeWithPlusAndMinus(42)).toBe('F');
    expect(convertScoreToGradeWithPlusAndMinus(42)).not.toBe('F-');
    expect(convertScoreToGradeWithPlusAndMinus(48)).not.toBe('F+');
})

test('If the given score is greater than 100 or less than 0, it should return "INVALID SCORE".', () => {
    const convertScoreToGradeWithPlusAndMinus = rewire('./app.js').__get__("convertScoreToGradeWithPlusAndMinus");

    expect(convertScoreToGradeWithPlusAndMinus(104)).toBe('INVALID SCORE');
})