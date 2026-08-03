function removeArrayValues(obj) {
    // your code here
    for (index in obj) {
        if (Array.isArray((obj[index]))) {
            delete obj[index];
        }
    }
}

let obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }