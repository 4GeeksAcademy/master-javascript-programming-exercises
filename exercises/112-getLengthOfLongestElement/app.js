function getLengthOfLongestElement(arr) {
    // Your code here
    if(arr.length == 0){
        return 0;
    }
    let maxLen = 0;
    arr.forEach(element => {
        if(element.length > maxLen){
            maxLen = element.length;
        }
    });
    return maxLen;
    
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
