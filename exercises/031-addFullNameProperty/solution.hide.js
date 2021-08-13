

function addFullNameProperty(obj) {
  // tu codigo aqui
  obj.fullName = obj.firstName + " " + obj.lastName;
  return obj
}

console.log(addFullNameProperty({ firstName: "Elias", lastName: "Toroa" }))