let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLessThan(num, obj) {
    // your code here
    for (const prop in obj) {
        if (obj[prop] < num) {
            delete obj[prop]
        }
    }
    return obj
}
