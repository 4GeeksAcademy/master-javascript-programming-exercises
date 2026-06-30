function removeFromBack(arr) {
    // your code here
    return arr.slice(0,arr.length-1);
}

let output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]
