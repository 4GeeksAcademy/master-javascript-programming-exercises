let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

console.log(obj); // --> { b: 2, c: 'montana' }

function removeNumbersLargerThan(num, obj) {
    // your code here
    // get type number
    // compare and del if necessary

    for (const key in obj){
        if(typeof obj[key] === "number" && obj[key] > num ){
            delete obj[key]

        }
    }

    return obj
    
}

removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }
//console.log(removeNumbersLargerThan(5, obj)); 