function removeFromFrontOfNew(arr) {
    // your code here
    let newArr = arr.filter((el, index) => index != 0) // creates new array with all elements of arr but the first one
    return newArr
}

let arr = [1, 2, 3];
let output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]
