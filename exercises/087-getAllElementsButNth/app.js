function getAllElementsButNth(array, n) {
    // your code here
    let newArr = [];

    for (let i in array) {
        if (i != n) {
            newArr.push(array[i])
        }
    }

    return newArr;
}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
