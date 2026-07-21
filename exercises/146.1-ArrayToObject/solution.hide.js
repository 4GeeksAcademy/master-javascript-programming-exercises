function transformFirstAndLast(array) {
  // your code here
  let aux = { [array[0]]: array[array.length - 1] };

  return aux;
}

let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(arr)); // --> { Queen: "Beyonce" }
