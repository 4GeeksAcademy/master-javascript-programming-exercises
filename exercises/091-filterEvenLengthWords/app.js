function filterEvenLengthWords(words) {
    // your code here
    let lista = []

    for(let i in words){
        if(words[i].length % 2 === 0){
            lista.push(words[i])
        }
    }
    
    return lista
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
