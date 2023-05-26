function removeFromFrontOfNew(arr) {
    // your code here
    return new_array = arr.filter((value,index, arr) => index > 0)   
}

//let arr = [1, 2, 3];
let arr = [9, 21, 74,33];
let output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]
