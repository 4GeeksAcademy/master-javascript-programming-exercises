// Write your function here
function isSameLength(word1, word2){

    let iguales = false;

    if(word1.length === word2.length){
        iguales = true;
    } else {
        iguales = false;
    }

    return iguales
}

isSameLength("hola", "chau")