# `134` convertScoreToGradeWithPlusAndMinus

## 📝 Instructions:

1. Write a function callled `convertScoreToGradeWithPlusAndMinus`. Given a score, `convertScoreToGradeWithPlusAndMinus` returns a string representing the letter grade corresponding to the given score.

## Example:

```js
let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'

```

## 💡 Hints:

+ (100 - 90) --> 'A'

+ (89  - 80) --> 'B'

+ (79  - 70) --> 'C'

+ (69  - 60) --> 'D'

+ (59  -  0) --> 'F'

+ If the given score is greater than 100 or less than 0, it should return `INVALID SCORE`.

+ If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a `-`

+ If the score is between the 8 and 9 (inclusive) of a given range, return the letter with a `+`.

+ There are no `F+` and no `F-`.