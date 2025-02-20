let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLessThan(num, obj) {
    // your code here
    for (index in obj) {
        if (obj[index] < num) {
            delete obj[index];
        }
    }
}
removeNumbersLessThan(5, obj);
console.log(obj); // --> { a: 8, c: 'montana' }