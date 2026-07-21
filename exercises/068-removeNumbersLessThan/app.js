let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLessThan(num, obj) {
    // your code here
    for (let key in obj){
        if (obj[key] < num){
            return delete obj[key];
        }
    }
    
}
removeNumbersLessThan(5, obj);
console.log(obj); // --> { a: 8, c: 'montana' }