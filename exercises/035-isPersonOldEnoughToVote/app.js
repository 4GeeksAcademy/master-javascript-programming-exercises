function isPersonOldEnoughToVote(person) {
  // Add your code after this line
  let can_vote = false;

  if (person.age >= 18){
    can_vote = true;
  } else {
    can_vote = false
  }

  return can_vote
}

let obj = {
  age: 19
};

isPersonOldEnoughToVote(obj)