function findPairForSum(array, number) {
  let hashMap = {},
    results = [];

  for (let i = 0; i < array.length; i++) {
    if (hashMap[array[i]]) {
      results.push(hashMap[array[i]], array[i]);
    } else {
      hashMap[number - array[i]] = array[i];
    }
  }
  return results;
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2, 6], 9);
console.log(pair); // --> [4, 5]


// or

function findPairForSum(array, number) {
  let results = [];
  for (let x = 0; x < array.length; x++) {
    let num = array[x];
    for (let y = x + 1; y < array.length; y++) {
      if (num + array[y] == number) results.push(num, array[y]);
    }
  }
  return results;
}

let pair2 = findPairForSum([3, 34, 4], 7);
console.log(pair2); // --> [4, 5]

