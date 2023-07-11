# `133` convertScoreToGrade

## 📝 Instructions:

1. Write a function called `convertScoreToGrade`. Given a score, `convertScoreToGrade` returns a string representing the letter grade corresponding to the given score.

## 📎 Example:

```Js
let output = convertScoreToGrade(91);
console.log(output); // --> 'A'
```

## 💡 Hints:

| Score    	| Grade 	|
|:---------:|:-------:|
| 100 - 90 	| 'A'   	|
| 89 - 80  	| 'B'   	|
| 79 - 70  	| 'C'   	|
| 69 - 60  	| 'D'   	|
| 59 - 0   	| 'F'   	|

+ If the given score is greater than 100 or less than 0, `convertScoreToGrade` should return `INVALID SCORE`.
