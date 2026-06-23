function computeCompoundInterest(
  principal,
  interestRate,
  compoundingFrequency,
  timeInYears
) {
  // your code here
  let aux = 1 + interestRate / compoundingFrequency;
  let aux2 = aux ** (compoundingFrequency * timeInYears);
  let aux3 = principal * aux2;
  return aux3 - principal;
}

let output = computeCompoundInterest(1500, 0.043, 4, 6);
console.log(output); // --> 438.83682213410543
