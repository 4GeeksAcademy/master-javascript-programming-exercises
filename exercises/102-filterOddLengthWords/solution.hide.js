function filterOddLengthWords(words) {
    // your code here
    if (words.length < 1){
        return []
      }else{
        let aux = []
        words.map(w=>{
          w.length % 2 !== 0 ? aux.push(w) : null
        })
        return aux;
      }
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']