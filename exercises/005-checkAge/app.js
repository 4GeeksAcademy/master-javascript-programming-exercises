function checkAge(name, age) {
  // your code here
  if (age < 21) {
    return "Go home, " + name + "!";
  } else {
    return "Welcome, " + name + "!";
  }
}
console.log(checkAge("Adrian", 22));

