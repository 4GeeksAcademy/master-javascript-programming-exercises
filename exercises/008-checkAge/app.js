function checkAge(name, age) {
  // your code here
  let message = ""
  if (age >= 21){
     message = "Welcome, " + name +"!"
  } else {
    message = "Go home, " + name +"!"
  }
  return message;
};

let output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'
