function areValidCredentials(name, password){
    let valida = false

    if ( password.length >= 8 && name.length > 3 ){
        valida = true
    }
    

    return valida
}

let output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output);