// Write your function here
function areValidCredentials(name,password) {
    if (name.length > 3 && password.length > 8) {
        return true
    } else {
        return false
    }
}

let output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true