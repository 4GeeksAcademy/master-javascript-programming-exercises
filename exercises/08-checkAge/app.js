function checkAge(name, age) {
  // your code here
  if (age<22) {
      return '¡Para la casa,'+name+'!'
  } else {
      return '¡Bienvenido '+name+'!'
  }
}
var output = checkAge('Adrian', 22);
console.log(output); // --> '¡BIenvenido Adrian!'