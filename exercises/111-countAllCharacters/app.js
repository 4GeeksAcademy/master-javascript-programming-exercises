// Write your function here
function countAllCharacters(str){
    let newObj={};
    for(char in str){
        if(!(str[char] in newObj)){
            newObj[str[char]] = 1
        }else{
            newObj[str[char]] +=1;
        }
    }
    return newObj;
}

let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
