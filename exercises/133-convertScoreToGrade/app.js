function convertScoreToGrade(score) {
    // your code here
    if (score > 100 || score < 0) {
        return 'INVALID SCORE';
    } else {
        if (score <= 59 && score > 0) {
            return 'F';
        } else if (score >= 60 && score <= 69) {
            return 'D';
        } else if (score >= 70 && score <= 79) {
            return 'C';
        } else if (score >= 80 && score <= 89) {
            return 'B';
        } else if (score >= 90 && score <= 100) {
            return 'A'
        }
    }

}

let output = convertScoreToGrade(91);
console.log(output); // --> 'A'
