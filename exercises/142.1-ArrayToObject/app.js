function transformFirstAndLast(array) {
  // your code here
  let obj={};
  obj[array.shift()] = array.pop();
  return obj
  
  
}

let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(arr)); // --> { Queen: "Beyonce" }
