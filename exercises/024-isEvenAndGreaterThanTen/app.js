// Write your function here
function isEvenAndGreaterThanTen(num) {

    let resultado = false;

    if(num > 10 && num % 2 === 0){
        resultado = true;
    }
    else{
        resultado = false;
    }

    return resultado
}

isEvenAndGreaterThanTen(13)