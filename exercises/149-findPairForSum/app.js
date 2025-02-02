function findPairForSum(array, number) {
  // your code here
  let arr = [];
  let found = false;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i != j && (array[i] + array[j] == number) && found == false) {
        arr.push(array[i]);
        arr.push(array[j]);
        found = true;
      }
    }
  }

  return arr;
  
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
