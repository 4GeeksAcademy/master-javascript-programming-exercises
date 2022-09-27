function getLongestWordOfMixedElements(arr) {
  // your code here
  let aux = '';
  if (arr.length > 0) {
    let hasString = arr.find((e) => typeof e == 'string');
    if (hasString != undefined) {
      arr.map((e) => {
        if (e.length > aux) aux = e;
      });
    } else {
      aux = '';
    }
  } else {
    aux = '';
  }
  return aux;
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
