function convertScoreToGrade(score) {
    // your code here
    

    if(score >100 || score <0){return 'INVALID SCORE'}
    switch (true){
        case score >=90:
            return 'A';
            break;
        case (score >=80 && score <90):
            return 'B';
            break;
        case (score >=70 && score <80):
            return 'C';
            break;
        case (score >=60 && score <70):
            return 'D';
            break;
        case (score <=59):
            return 'F';
            break;

}
}

let output = convertScoreToGrade(91);
console.log(output); // --> 'A'
