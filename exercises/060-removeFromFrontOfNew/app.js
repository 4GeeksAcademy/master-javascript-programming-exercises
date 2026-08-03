function removeFromFrontOfNew(arr) {
    // your code here
    let newArr =  arr.slice(1,arr.length);
    return newArr;
}

let arr = [1, 2, 3];
let output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]
