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
let client = '';
let visits = 0;
function greetCustomer(firstName) {
  let greeting = '';
  // your code here
  objLen = (Object.keys(customerData).length);
	for (let i = 0; i<objLen; i++){
    if (firstName == Object.keys(customerData)[i]){
     client = Object.keys(customerData)[i];
     visits =  Object.values(customerData)[i];
    }
  }
  switch(true){
    case (client == ''):
      greeting = 'Welcome! Is this your first time?';
      break;
    case (visits.visits === 1):
      greeting = 'Welcome back, '+client+"! We're glad you liked us the first time!";
      break;
    case (visits.visits>1):
      greeting = 'Welcome back, '+client+"! So glad to see you again!";
      break;
  }
  return greeting;
}

console.log(greetCustomer('Ramon')); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
