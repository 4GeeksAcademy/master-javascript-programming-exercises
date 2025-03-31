function getLengthOfShortestElement(arr) {
    // your code here
    if(arr.length == 0){
        return 0;
    }
    let minLen = arr[0].length;
    arr.forEach(element => {
        if(element.length < minLen){
            minLen = element.length;
        }
    });
    return minLen;
    
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
