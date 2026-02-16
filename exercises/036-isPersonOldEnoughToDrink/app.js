function isPersonOldEnoughToDrink(person) {
  // Add your code after this line
  let can_drink = false;

  if (person.age >= 21) {
    can_drink = true
  } else {
    can_drink = false
  }
  return can_drink
}

let obj = {
  age: 16
};

isPersonOldEnoughToDrink(obj)