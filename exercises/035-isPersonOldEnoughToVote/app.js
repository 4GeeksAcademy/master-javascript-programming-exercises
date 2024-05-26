function isPersonOldEnoughToVote(person) {
  // Add your code after this line
  if (person.age >= 18) {
    return true;
  }

  return false;
}

let obj = {
  age: 19
};

let output = isPersonOldEnoughToVote(obj);
console.log(output);