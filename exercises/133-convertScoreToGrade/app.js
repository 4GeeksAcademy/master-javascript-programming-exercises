function convertScoreToGrade(score) {
    // your code here
    if (score < 0 || score > 100) {
        return 'INVALID SCORE';
    } else if (score >= 90 && score <= 100) {
        return 'A';
    } else if (score >= 80 && score <= 89) {
        return 'B';
    } else if (score >= 70 && score <= 79) {
        return 'C';
    } else if (score >= 60 && score <= 69) {
        return 'D';
    } else if (score >= 0 && score <= 59) {
        return 'F';
    }
}

let output = convertScoreToGrade(91);
console.log(output); // --> 'A'
