// Write your function here
function isEven(numero) {

    let es_par = false;

    if( numero % 2 === 0 ){
        es_par = true;
    } else {
        es_par = false;
    }

    return es_par
}

isEven(11)