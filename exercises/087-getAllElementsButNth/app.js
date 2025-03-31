function getAllElementsButNth(array, n) {
    // your code here
    array.splice(n,n);
    return array;

}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
