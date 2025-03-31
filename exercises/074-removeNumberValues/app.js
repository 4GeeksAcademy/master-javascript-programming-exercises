function removeNumberValues(obj) {
    // your code here
    for (key in obj) {
        if (typeof (obj[key]) == 'number') {
            delete obj[key];
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
