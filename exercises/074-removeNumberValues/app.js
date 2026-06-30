function removeNumberValues(obj) {
    // your code here
    for (index in obj) {
        if (!isNaN((obj[index]))) {
            delete obj[index];
        }
    }
}

let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
