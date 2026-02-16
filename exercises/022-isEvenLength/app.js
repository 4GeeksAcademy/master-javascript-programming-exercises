// Write your function here
function isEvenLength(word){

    let par = false;

    if( word.length % 2 === 0) {
        par = true;
    } else {
        par = false;
    }

    return par;

}

isEvenLength('wow');