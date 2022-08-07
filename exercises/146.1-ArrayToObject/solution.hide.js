let output = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];

function transformFirstAndLast(array) {
  // your code here
  let aux = { [array[0]]: array[array.length - 1] };

  return aux;
}

console.log(output);
