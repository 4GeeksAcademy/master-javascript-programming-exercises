function average(array_of_numbers) {
  // process array of numbers
  return sum(array_of_numbers) / array_of_numbers.length;
}

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(average([1, 2]));
