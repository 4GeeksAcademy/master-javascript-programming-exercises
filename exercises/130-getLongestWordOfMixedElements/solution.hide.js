function getLongestWordOfMixedElements(arr) {
    // your code here
    let longestWord = '';
  
    for (let element of arr) {
      if (typeof element === 'string' && element.length > longestWord.length) {
        longestWord = element;
      }
    }
  
    return longestWord;
  }

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
