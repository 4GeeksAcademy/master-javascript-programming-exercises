function addFullNameProperty(obj) {
  // Add your code after this line
  let firstName = obj.firstName;
  let lastName = obj.lastName;
  let fullName = firstName + " " + lastName;
  obj.fullName = fullName;
  return obj;
}

let person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'