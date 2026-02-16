function removeArrayValues(obj) {
    // your code here
    for( let i in obj) {
        if( Array.isArray(obj[i]) ) {
            delete obj[i]
        }
    }


    return obj;
}

let obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}

removeArrayValues(obj)