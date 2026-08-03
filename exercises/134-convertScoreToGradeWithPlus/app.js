function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    let grade = '';

    if(score >100 || score <0){return 'INVALID SCORE'}
    switch (true){
        case score >=90:
            grade = 'A';
            break;
        case (score >=80 && score <90):
            grade = 'B';
            break;
        case (score >=70 && score <80):
            grade = 'C';
            break;
        case (score >=60 && score <70):
            grade = 'D';
            break;
        case (score <=59):
            grade = 'F';
            break;
    }
    if (grade !== 'F') {
        let lastDigit = score % 10;
        if (0<lastDigit && lastDigit <= 2) {
            grade += '-';
        } else if (lastDigit >= 8 || lastDigit == 0) {
            grade += '+';
        }
    }
    return grade;
}

let output = convertScoreToGradeWithPlusAndMinus(100);
console.log(output); // --> 'A-'
