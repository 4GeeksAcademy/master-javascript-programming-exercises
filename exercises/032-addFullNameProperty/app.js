function addFullNameProperty(obj){
  let newObj = obj;
  newObj['fullName'] = newObj['firstName'] + " " + newObj['lastName'];
  return newObj;
}

let person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName);