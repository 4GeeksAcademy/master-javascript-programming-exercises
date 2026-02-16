function countCharacter(str, char) {
    // your code here
    let cantidad = 0;

    for( let i = 0; i < str.length; i++){
        if (str[i] === char){
                cantidad += 1; 
            }
        }

    return cantidad    
    }

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
