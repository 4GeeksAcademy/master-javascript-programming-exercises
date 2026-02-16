function isOldEnoughToDrinkAndDrive(age) {
  // your code here
    let drink_age = false;
    let drive_age = false;

    let legal_age = false;

    if (age >= 21) {
      drink_age = true;
    } else {
      drink_age = false;
    }
    
    if (age >= 16) {
      drive_age = true;
    } else {
      drive_age = false
    }

    if (drink_age && drive_age) {
      legal_age = false;
    } else { 
      legal_age = false;
    }
    return legal_age
}

isOldEnoughToDrinkAndDrive