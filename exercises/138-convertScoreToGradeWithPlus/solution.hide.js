function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    if (score > 100 || score < 0) return 'INVALID SCORE';
    else {
      if (score >= 90 && score <= 100) {
        if (score >= 90 && score <= 92) return 'A-';
        if (score >= 98 && score <= 100) return 'A+';
        return 'A';
      }
      if (score >= 80 && score <= 89) {
        if (score >= 80 && score <= 82) return 'B-';
        if (score >= 88 && score <= 89) return 'B+';
        return 'B';
      }
      if (score >= 70 && score <= 79) {
        if (score >= 70 && score <= 72) return 'C-';
        if (score >= 78 && score <= 79) return 'C+';
        return 'C';
      }
      if (score >= 60 && score <= 69) {
        if (score >= 60 && score <= 62) return 'D-';
        if (score >= 68 && score <= 69) return 'D+';
        return 'D';
      }
      if (score >= 0 && score <= 59) return 'F';
    }
  }
  
let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
