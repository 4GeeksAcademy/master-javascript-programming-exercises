let customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  let greeting = '';
  // your code here
  let found = false;

  for (let i in customerData) {
    if (firstName == i) {
      if (customerData[i].visits == 1) {
        greeting = "Welcome back, " + i + "! We're glad you liked us the first time!";
      } else if (customerData[i].visits > 1) {
        greeting = "Welcome back, " + i + "! So glad to see you again!";
      }
      found = true;
    } else if (found == false) {
      greeting = "Welcome! Is this your first time?";  
    }
  }
	
  return greeting;
}

console.log(greetCustomer('Joe')); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
