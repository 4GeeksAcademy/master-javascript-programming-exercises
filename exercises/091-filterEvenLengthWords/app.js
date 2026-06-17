function filterEvenLengthWords(words) {
    // your code here
    const result = words.filter(word => word.length % 2 == 0)
    return result
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
