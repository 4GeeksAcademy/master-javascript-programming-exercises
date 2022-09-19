function filterEvenLengthWords(words) {
    // your code here
    let aux = []
    words.map(item=>{
        if (item.length % 2 == 0) aux.push(item)
    })
    return aux
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']