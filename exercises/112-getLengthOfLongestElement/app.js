function getLengthOfLongestElement(arr) {
    // Your code here
    if (arr.length === 0){ return 0;}
    let max = 0;
    for (i in arr){
        if (arr[i].length > max) {max = arr[i].length}
    }
    return max;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
