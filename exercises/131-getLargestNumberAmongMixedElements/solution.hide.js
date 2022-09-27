function getLargestNumberAmongMixedElements(arr) {
  // your code here
  let aux = 0;
  if (arr.length > 0) {
    let hasNumbers = arr.find((e) => typeof e == 'number');
    if (hasNumbers) {
      arr.map((e) => {
        if (e > aux) {
          aux = e;
        }
      });
    } else {
      aux = 0;
    }
  } else {
    return 0;
  }
  return aux;
}

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
