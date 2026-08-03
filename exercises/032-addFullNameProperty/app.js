function addFullNameProperty(obj) {
  // Add your code after this line
  obj.fullName = obj.firstName + " " + obj.lastName;

  return obj;
}

let person = {
  firstName: 'Jade',
  lastName: 'Smith'
};

addFullNameProperty(person);
console.log(person.fullName);