function filterOddLengthWords(words) {
  /*
  Using filter method:
  return words.filter((item) => item.length % 2 !== 0)
  */
  // your code here
  let aux = []
  words.map(w => {
      w.length % 2 !== 0 ? aux.push(w) : null
  })
  return aux;
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']