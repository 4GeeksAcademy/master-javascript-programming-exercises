let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj) {
    // your code here
    for (index in obj) {
        if (obj[index] > num) {
            delete obj[index];
        }
    }
}
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }