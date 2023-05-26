// function
function addFullNameProperty(obj){
	obj['fullName'] = obj['firstName'] +' '+ obj['lastName']
	return obj
};

let person = {
  firstName: 'Jade',
  lastName: 'Smith'
};

addFullNameProperty(person);
//console.log(person['firstName']); // --> 'Jade Smith'
// console.log(person.firstName); // --> 'Jade Smith'
console.log(person.fullName); // --> 'Jade Smith'
