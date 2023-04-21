// get space
// slice
// push
function getAllWords(str) {
    // your code here
    charcount =0
    for (var i = 0; i < str.length; i++){
        if (str[i] === ' '){
            charcount = charcount + 1   
        }
    }
    

    let words = []
    let todo = charcount +1
    while (todo > 0){
        spacePosition = str.search(' ')
        word = str.slice(0,spacePosition)
        words.push(word)
        str = str.slice(spacePosition+1,)
        todo = todo -1
        
        if (todo ==1){
            word = str
            words.push(word)
            todo = 0
        }
        
        
 

    }
    return words

}

let output = getAllWords('Radagast the Brown');
//let output = getAllWords('the Brown');
//let output2 = 'theBrown';
console.log(output); // --> ['Radagast', 'the', 'Brown']
//console.log(output2.search(' ')); // --> ['Radagast', 'the', 'Brown']
