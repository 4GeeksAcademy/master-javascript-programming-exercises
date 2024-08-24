function checkAge(name, age) {
  if (age >= 21) {
    return `Welcome, ${name}!`
  } else {
    return `Go home, ${name}!`
  }
}

checkAge('Adrian',21)