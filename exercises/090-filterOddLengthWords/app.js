function filterOddLengthWords(words) {
    // your code here
    let new_list = []

    for (let i in words){
        if(words[i].length % 2 !== 0){
            new_list.push(words[i])
        }
    }
    return new_list
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']
