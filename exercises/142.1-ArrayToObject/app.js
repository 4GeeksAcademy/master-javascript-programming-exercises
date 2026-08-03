function transformFirstAndLast(array) {
  // your code here
  let key = array[(array.length-1)];
  let property = array[0];
  let obj={};
  obj[property]=key;
  return obj;
}

let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(arr)); // --> { Queen: "Beyonce" }
