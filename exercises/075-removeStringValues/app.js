function removeStringValues(obj) {
    // your code here
    for (key in obj) {
        if (typeof (obj[key]) == 'string') {
            delete obj[key];
        }
    }
}

let obj = {
    name: 'Sam',
    age: 20
}

removeStringValues(obj);
console.log(obj); // --> { age: 20 }
