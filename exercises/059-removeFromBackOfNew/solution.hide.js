function removeFromBackOfNew(arr) {
    // your code here
    return arr.slice(0, arr.length - 1);
}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]
