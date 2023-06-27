function findShortestWordAmongMixedElements(arr) {
  // your code here
  let shortestWord = '';
  let shortestLength = Infinity;

  for (let element of arr) {
    if (typeof element === 'string' && element.length < shortestLength) {
      shortestWord = element;
      shortestLength = element.length;
    }
  }

  return shortestWord;
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
