function isOldEnoughToDrive(age) {
  // your code here
  let legal_age = false;

  if (age >= 16){
    legal_age = true;
  } 
  else {
    legal_age = false;
  }

  return legal_age
}

isOldEnoughToDrive(12)
