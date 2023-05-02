// Write your function here
// get letter
// check if exist
// if not exist value 1
// if exist valua +1

//for(let i; i<text.length;i++){
//    if(count_char[text[i]]){
//       count_char[text[i]]+ 
//    } else {
//        count_char[text[i]]=1
//    }
//}

function countAllCharacters(text){
    count_char = {}
    for(let i =0; i< text.length;i++){
        if(count_char[text[i]]){
            count_char[text[i]] += 1
        } else {
            count_char[text[i]] = 1
        }

        

    }


    return count_char
}

let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
