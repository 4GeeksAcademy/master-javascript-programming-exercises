function isOldEnoughToVote(age) {
  // your code here
  let legal_age = false;

  if( age >= 18) {
    legal_age = true;
  } 
  else {
    legal_age = false;
  }
  return legal_age
}
 isOldEnoughToVote(12)