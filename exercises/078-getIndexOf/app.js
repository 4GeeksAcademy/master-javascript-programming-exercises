// Write your function here
function  getIndexOf(letra, string){

    let index = 0;

    for (let i = 0; i < string.length; i++) {
        if ( string[i] === letra ){
           return  i
           
            }
           
        }
    
    return -1
}

let output = getIndexOf('a', 'I am a hacker');
console.log(output);