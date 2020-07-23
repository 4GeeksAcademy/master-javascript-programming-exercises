function keep(array, keeper) {
  // your code here
  let arr = [];
  for(i=0; i<array.length; i++){
    if (array[i] === keeper){
      arr.push(array[i]);
    }
  }
  return arr;
}

var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output);