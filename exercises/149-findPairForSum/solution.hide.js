function findPairForSum(array, number) {
  // your code here
  for (let i = 0; i < array.length; i++) {
      for (let j = 1; j < array.length; j++) {
          if (array[i] + array[j] === number) {
              return [array[i], array[j]]
          }
      }
  }
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
