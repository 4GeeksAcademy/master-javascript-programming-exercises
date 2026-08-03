function removeStringValues(obj) {
    // your code here
    for (index in obj) {
        if (typeof(obj[index]) == 'string') {
            delete obj[index];
        }
    }
}

let obj = {
    name: 'Sam',
    age: 20
}
//console.log(typeof('cadena'));
removeStringValues(obj);
console.log(obj); // --> { age: 20 }
