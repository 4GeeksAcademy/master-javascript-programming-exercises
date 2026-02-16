// Write your function here
function isOddLength(palabra) {

    let es_inpar = false;

    if( palabra.length % 2 === 0 ) {
        es_inpar = false;
    } else {
        es_inpar = true;
    }

    return es_inpar
}

isOddLength('special')