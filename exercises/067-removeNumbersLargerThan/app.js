let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj) {
    // your code here
    for (let i in obj) {
        if (typeof obj[i] == 'number' && obj[i] > num) {
            delete obj[i];
        }
    }

    return obj;
}

removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }