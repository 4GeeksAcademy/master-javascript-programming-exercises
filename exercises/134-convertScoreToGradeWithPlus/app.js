function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    let scoreStr = '';
    let lastNum = parseInt(score.toString().charAt(1));

    if (score < 0 || score > 100) {
        return 'INVALID SCORE';
    } else if (score >= 90 && score <= 100) {
        scoreStr = 'A';
    } else if (score >= 80 && score <= 89) {
        scoreStr = 'B';
    } else if (score >= 70 && score <= 79) {
        scoreStr = 'C';
    } else if (score >= 60 && score <= 69) {
        scoreStr = 'D';
    } else if (score >= 0 && score <= 59) {
        return 'F';
    }
    
    if (lastNum >= 0 && lastNum <= 2 && score != 100 ) {
        scoreStr += '-';
    } else if (lastNum == 8 || lastNum == 9 || score == 100) {
        scoreStr += '+';
    }

    return scoreStr;
}

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
