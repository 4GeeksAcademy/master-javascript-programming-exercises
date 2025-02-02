function removeArrayValues(obj) {
    // your code here
    for (let i in obj) {
        if (typeof obj[i] == 'object') {
            delete obj[i];
        }
    }

    return obj;
}

let obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
  }
  removeArrayValues(obj);
  console.log(obj); // --> { b: 2 }