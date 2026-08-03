function filterOddLengthWords(words) {
    // your code here
    let odds = [];

    odds = words.filter((i) => i.length % 2 != 0);

    return odds;
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']
