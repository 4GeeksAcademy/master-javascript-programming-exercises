function filterEvenLengthWords(words) {
    //  returns an array containing only the
    //  elements of the given array whose length
    //  is an even number.
    
    let evenwords = words.filter((elemento) => elemento.length%2 === 0)
    return evenwords;  
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
