function isPersonOldEnoughToDrinkAndDrive(person) {
  // the person object contains an "age" property inside
  // Add your code after this line
  if (person['age'] < 21) {
    return false
  } else {
    return true
  }
  
  
}

let obj = {
  age: 45
};
let output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output); // --> false
