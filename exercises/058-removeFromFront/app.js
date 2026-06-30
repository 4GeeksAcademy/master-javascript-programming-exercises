function removeFromFront(arr) {
    // your code here
    return arr.slice(1,arr.length);
}

let output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]
