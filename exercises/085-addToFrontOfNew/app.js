function addToFrontOfNew(arr, element) {
    // your code here
    let newArr = [];

    newArr = newArr.concat(arr);

    newArr.unshift(element);

    return newArr;
}

let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]
