function getLengthOfShortestElement(arr) {
    // your code here
    if (arr.length === 0){return 0;}
    let newArr = [];
    for (i in arr){
        newArr[i] = arr[i].length;
    }
    return Math.min(...newArr);
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
