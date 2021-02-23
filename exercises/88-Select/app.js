// Write your function here
function select(arr, obj) {
    let objeto2 = {};
    for (i in arr) {
        let key = arr[i];
        if (obj[key] != undefined)
            objeto2[key] = obj[key];
    }
    return objeto2
}
var arr = ['a', 'c', 'e'];
var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }


