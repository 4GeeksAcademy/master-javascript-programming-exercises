function isPersonOldEnoughToDrive(person) {
  // Add your code after this line
  let can_drive = false;

  if (person.age >= 16)   {
    can_drive = true;
  } else {
    can_drive = false;
  }
  
  return can_drive
}

let miguel = {
  age: 16
};

isPersonOldEnoughToDrive(miguel)