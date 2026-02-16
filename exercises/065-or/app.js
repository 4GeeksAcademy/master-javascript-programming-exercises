function or(expression1, expression2) {
  // your code here
  let buleano = false

  if(expression1 === false && expression2 === false){
    buleano = false;
  } 
  else {
    buleano = true;
  }

  return buleano
  
}

let output = or(true, false);
console.log(output); // --> true;
