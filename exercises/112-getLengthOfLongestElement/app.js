function getLengthOfLongestElement(arr) {
    let mayorLongitud = 0;
    if (arr.length === 0) {
        return 0;
    }

  
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > mayorLongitud) {           
            mayorLongitud = arr[i].length;
        }
    }

    return mayorLongitud;
}

    
let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
