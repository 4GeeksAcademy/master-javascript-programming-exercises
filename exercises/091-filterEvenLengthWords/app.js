function filterEvenLengthWords(words) {
    // your code here
    let evens = [];

    evens = words.filter((i) => i.length % 2 == 0);

    return evens;
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
