function findPairForSum(array, number) {
  // your code here
  const seenNumbers = new Map();

  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const complement = number - current;
    if (seenNumbers.has(complement)) {
        return [complement, current];
    }
    seenNumbers.set(current, i);
}

  return null;
}
let pair = findPairForSum([3, 34, 4, 12, 5, 2, 6], 9);
console.log(pair); // --> [4, 5]
