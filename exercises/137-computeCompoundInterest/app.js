function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here
  let comp = principal*Math.pow((1+(interestRate/compoundingFrequency)),(compoundingFrequency*timeInYears));
  
  return (comp-principal);
}

let output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543
