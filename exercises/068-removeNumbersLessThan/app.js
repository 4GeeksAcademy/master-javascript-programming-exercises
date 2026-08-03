let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLessThan(num, obj) {
    // your code here
    for (let i in obj) {
        if (typeof obj[i] == 'number' && obj[i] < num) {
            delete obj[i];
        }
    }

    return obj;
}

removeNumbersLessThan(5, obj);
console.log(obj); // --> { a: 8, c: 'montana' }