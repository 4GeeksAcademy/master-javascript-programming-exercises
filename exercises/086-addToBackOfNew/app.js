function addToBackOfNew(arr, element) {
    // your code here
    let arr2 = [...arr].concat(element)
    return arr2
}

let input = [1, 2];
let output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]
