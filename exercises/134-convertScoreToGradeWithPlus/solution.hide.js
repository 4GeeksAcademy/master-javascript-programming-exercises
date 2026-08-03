function convertScoreToGradeWithPlusAndMinus(score) {
  // your code here
  if (score > 100 || score < 0) return "INVALID SCORE";
  if (score == 100) return "A+";
  if (score < 60) return "F";

  let grade = "";
  if (score <= 100) grade = "A";
  if (score < 90) grade = "B";
  if (score < 80) grade = "C";
  if (score < 70) grade = "D";

  let plusOrMinus = "";
  const plusScore = Number(String(score).split("")[1]);
  if (plusScore <= 2) plusOrMinus = "-";
  if (plusScore >= 8) plusOrMinus = "+";

  return grade + plusOrMinus;
}

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
