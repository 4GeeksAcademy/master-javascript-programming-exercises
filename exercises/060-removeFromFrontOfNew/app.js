function removeFromFrontOfNew(arr) {
    // your code here
    let newArr = [];

    for (let x in arr) {
        if (x != 0) {
            newArr.push(arr[x]);
        }
    }

    return newArr;
}

let arr = [1, 2, 3];
let output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]
