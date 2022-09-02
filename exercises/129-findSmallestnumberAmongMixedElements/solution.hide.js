function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  let aux = 99999999;
  if (arr.length > 0) {
    let hasNumber = arr.find((e) => typeof e == 'number');
    if (hasNumber != undefined) {
      arr.map((e) => {
        if (e < aux) aux = e;
      });
    } else {
      aux = 0;
    }
    return aux;
  } else {
    return 0;
  }
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
