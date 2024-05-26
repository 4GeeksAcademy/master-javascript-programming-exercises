function isPersonOldEnoughToDrive(person) {
  // Add your code after this line
  if (person.age >= 16) {
    return true;
  }

  return false;
}

let obj = {
  age: 16
};

let output = isPersonOldEnoughToDrive(obj);
console.log(output); 